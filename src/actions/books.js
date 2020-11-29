import RNFileSelector from 'react-native-file-selector';
import {
    getStoragePermission,
    checkStoragePermissions
} from '../utils/permission';

export const addBook = () => async dispatch => {
    let granted = await checkStoragePermissions();
    if (!granted) await getStoragePermission();
    RNFileSelector.Show({
        title: "Select epub file",
        filter: ".*\\.(epub|EPUB|pdf|PDF)$",
        onDone: url => {

            // file:Document/ksoqkqo/file.js => ["file:Document", "ksoqkqo", "file.js"]
            let components = url.split("/");
            let file = components[components.length - 1].split(".");

            dispatch({
                type: "add_books",
                payload: {
                    title: file[0],
                    url,
                    type: file[file.length - 1].toLowerCase()
                }
            })
        },
        onCancel: () => {}
    });
}

export const addMetadata = (data, index) => {
    return { type: "add_metadata", payload: {data, index} }
}