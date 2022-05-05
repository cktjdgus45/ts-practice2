type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
}

function getVideoMetaData(id: string): Pick<Video, 'id' | 'title'> {
    return {
        id: id,
        title: 'title'
    }
}