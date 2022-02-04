import Image from 'next/image';
import React from 'react';

const OldLibraryBuilding = () => {
    return <Image draggable={ false } src={ '/assets/icons/old-library-building.svg' } alt="Old Library Building" width={ 50 } height={ 50 }/>;
};

export default OldLibraryBuilding;
