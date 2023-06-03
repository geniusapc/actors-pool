import Button from "../Button/Button";

const NoTalent = () => {
    return (
        <div className="flex flex-col items-center text-center gap-10">
            <svg
                width="97"
                height="96"
                viewBox="0 0 97 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="48.5" cy="48" r="48" fill="#D9D9D9" />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27.9341 30.4282C27.9341 28.7714 29.2772 27.4282 30.9341 27.4282H65.022C66.6788 27.4282 68.022 28.7714 68.022 30.4282V64.5161C68.022 66.173 66.6788 67.5161 65.022 67.5161H30.9341C29.2772 67.5161 27.9341 66.173 27.9341 64.5161V30.4282ZM33.2104 35.7027C33.2104 34.0459 34.5536 32.7027 36.2104 32.7027H60.8039C62.4607 32.7027 63.8039 34.0459 63.8039 35.7027V52.9115C63.8039 54.5684 62.4607 55.9115 60.8039 55.9115H54.8134C54.5292 55.9115 54.3081 56.1557 54.3081 56.4398C54.3081 59.6443 51.7104 62.242 48.5059 62.242C45.3014 62.242 42.7037 59.6443 42.7037 56.4398C42.7037 56.1557 42.4825 55.9115 42.1984 55.9115H36.2104C34.5536 55.9115 33.2104 54.5684 33.2104 52.9115V35.7027Z"
                    fill="white"
                />
            </svg>

            <article>
                <h2 className="text-3xl  font-bold">You have not added any talent to this project</h2>
                <p className="text-gray300">You can add as many talents as possible</p>
            </article>
            <Button variant="primary"> Add Talent</Button>
        </div>
    );
};

export default NoTalent
