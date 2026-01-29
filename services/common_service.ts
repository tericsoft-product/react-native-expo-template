import { Dimensions, Linking, Platform } from 'react-native';
import * as queryString from 'querystring';
import * as ImagePicker from 'expo-image-picker';

export interface FileType {
    uri: string;
    type: string | undefined;
    name: string;
    fileSize?: number;
}

const getAuthHeader = (token: string) => {
    return { Authorization: 'Bearer ' + token };
};

const isAndroid = () => {
    return Platform.OS === 'android';
};

const toCapitalize = (str: string | ''): any => {
    return str?.length > 0 ? str.charAt(0).toUpperCase() + str.slice(1) : '';
};

const toCapitalizeFirstLetter = (str: string | ''): any => {
    return str?.length > 0 ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : '';
};

const convertSecondsToMinutesSeconds = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
        .toString()
        .padStart(2, '0')}`;
};

const isIOS = () => {
    return Platform.OS === 'ios';
};

const parseQueryString = (q: string): any => {
    return queryString.parse(q);
};

const openLink = (link: string) => {
    Linking.canOpenURL(link)
        .then(supported => {
            if (!supported) {
                console.log('Cant handle url');
            } else {
                return Linking.openURL(link);
            }
        })
        .catch(err => {
            console.log('An error occurred', err);
        });
};

const openCall = (phoneNumber: string) => {
    if (Platform.OS !== 'android') {
        phoneNumber = `telprompt:${phoneNumber}`;
    } else {
        phoneNumber = `tel:${phoneNumber}`;
    }
    openLink(phoneNumber);
};

const getWidth = (screen: 'screen' | 'window' = 'screen') => {
    return Dimensions.get(screen).width;
};

const getHeight = (screen: 'screen' | 'window' = 'screen') => {
    return Dimensions.get(screen).height;
};

// Expo Image Picker (replaces react-native-image-picker)
const openMedia = async (
    mode: 'camera' | 'picker' = 'picker',
    allowsMultipleSelection: boolean = false,
    mediaType: ImagePicker.MediaTypeOptions = ImagePicker.MediaTypeOptions.Images,
    quality: number = 0.8,
): Promise<FileType | FileType[]> => {
    // Request permissions
    if (mode === 'camera') {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            throw new Error('Camera permission not granted');
        }
    } else {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            throw new Error('Media library permission not granted');
        }
    }

    const options: ImagePicker.ImagePickerOptions = {
        mediaTypes: mediaType,
        allowsMultipleSelection: allowsMultipleSelection,
        quality: quality,
        exif: false,
    };

    let result: ImagePicker.ImagePickerResult;

    if (mode === 'camera') {
        result = await ImagePicker.launchCameraAsync(options);
    } else {
        result = await ImagePicker.launchImageLibraryAsync(options);
    }

    if (result.canceled) {
        throw { didCancel: true, err: 'User cancelled image picker' };
    }

    if (result.assets && result.assets.length > 0) {
        const files = result.assets.map((asset) => ({
            uri: asset.uri,
            type: asset.type === 'image' ? 'image/jpeg' : 'video/mp4',
            name: asset.fileName || `image_${Date.now()}.jpg`,
            fileSize: asset.fileSize,
        }));

        // Check file size (8MB limit)
        const oversizedFiles = files.filter(file => file.fileSize && file.fileSize > 8000000);
        if (oversizedFiles.length > 0) {
            throw {
                didCancel: false,
                err: 'Size of image should be less than 8MB',
            };
        }

        return allowsMultipleSelection ? files : files[0];
    }

    throw {
        didCancel: false,
        err: 'Asset not selected',
    };
};

const CommonService = {
    getAuthHeader,
    isAndroid,
    isIOS,
    parseQueryString,
    toCapitalize,
    toCapitalizeFirstLetter,
    convertSecondsToMinutesSeconds,
    openCall,
    openLink,
    getWidth,
    getHeight,
    openMedia,
};

export default CommonService;
