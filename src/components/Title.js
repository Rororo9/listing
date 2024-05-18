const Title = ({ title }) => {
    let strLength;

    if (title.length > 50) {
        strLength = title.slice(0, 50) + '...';
    } else {
        strLength = title;
    }

    return strLength;
}

export default Title;