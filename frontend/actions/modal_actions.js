export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, trackId=0, artistId=0) => {
    return {
        type: OPEN_MODAL,
        modal,
        trackId,
        artistId
    };
};

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    };
};
