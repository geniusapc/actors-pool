import React from 'react';
import Button from '../../Button/Button';

const ActionButtons = () => {
    return (
        <div className="flex justify-between w-full md:justify-center items-end mt-14 gap-4">
            <Button className="w-52" variant="outlined">
                Save as draft
            </Button>
            <Button className="w-52" type="submit" variant="primary">
                Next
            </Button>
        </div>
    );
};
export default ActionButtons;
