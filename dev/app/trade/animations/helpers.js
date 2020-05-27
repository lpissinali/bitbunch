import { state } from "../state";

export function clipOffset(offset, object) {
    let newOffset = offset - object.min;
    newOffset = newOffset - Math.floor(newOffset / object.distance) * object.distance;
    newOffset = newOffset + object.min;
    return newOffset;
}

export function scrollColumn(object, delta, duration, updateHandler, name) {
    let initialOffset;
    return {
        duration: duration,
        easing: 'linear',
        begin: function(anim) {
            initialOffset = object.offset;
        },
        update: function(anim) {
            if (!anim.completed) {
                const d = delta * anim.progress / 100;
                const newOffset = clipOffset(initialOffset + d, object);
                object.offset = newOffset;
                updateHandler();
            }
        }
    };
}

export function listenForClose(closeButton, timeout) {
    return new Promise(resolve => {
        const handler = () => {
            resolve();
            closeButton.removeEventListener('click', handler);
        };
        closeButton.addEventListener('click', handler);
        if (!isNaN(timeout) && timeout > 0) {
            setTimeout(handler, timeout);
        }
    });
}
