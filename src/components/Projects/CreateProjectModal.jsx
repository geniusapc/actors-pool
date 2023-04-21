import React from 'react'
import Modal from '../Modal/Modal'
import Input from '../Input/Input'
import Button from '../Button/Button'


function CreateProjectModal() {
    return (
        <Modal id="create-project-modal">
            <h2 className='text-2xl  font-semibold mb-4'>Create a New Project</h2>
            <p className='mb-8'>Kindly give us details about your movie project</p>
            <form class="space-y-6" action="#">
                <Input id="Project Name" label="Project Name" placeholder="Enter project name" />
                <Input id="talent" label="Add Talents to this project (Optional)" placeholder="Search for a talent" />
                <div className='w-full flex'>
                    <Button className="mx-auto" type="submit" variant="primary">Create Project</Button>
                </div>
            </form>

        </Modal>
    )
}

export default CreateProjectModal