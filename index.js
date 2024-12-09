const baseHref = window.location.origin;

const linksConfig = [
    {
        name: 'Cloud API Documentation',
        link: 'https://tedee-tedee-api-doc.readthedocs-hosted.com/',
        description: 'Our Cloud REST API allows you to interact with our Tedee devices. This documentation covers all the necessary endpoints and methods to integrate our cloud functionalities seamlessly into your applications.',
        icon: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1246 1024" version="1.1">
                <path fill="currentColor" d="M303.339977 664.942675l106.011591-276.040855h39.350086l112.971638 276.040855h-41.612716l-32.193289-83.618933h-115.431018l-30.311864 83.618933h-38.784428z m79.647033-113.352842h93.579424l-28.811641-76.44984q-13.182279-34.775639-19.576668-57.242078a351.974224 351.974224 0 0 1-14.879251 52.716819zM590.853841 664.942675V388.90182h104.130165q27.483576 0 41.99392 2.631537 20.339076 3.393945 34.074715 12.89945t22.134424 26.647387a84.578091 84.578091 0 0 1 8.37419 37.653114q0 35.20603-22.404955 59.590786t-80.962803 24.384757H627.387936v112.221527h-36.534095z m36.534095-144.796021h71.322031q35.402781 0 50.269735-13.182278t14.916142-37.087457q0-17.314038-8.755394-29.660127a40.936387 40.936387 0 0 0-23.068988-16.281098q-9.222676-2.45938-34.087012-2.459381H627.387936v98.670341zM854.278074 664.942675V388.90182h36.534095v276.040855h-36.534095z"/>
                <path fill="currentColor" d="M914.938691 915.270707H623.108614a32.857322 32.857322 0 0 1 0-65.702347h291.830077c146.443805 0 265.613082-119.144683 265.613081-265.613081 0-133.728808-99.912328-247.020166-232.411446-263.522609l-23.364114-2.914365-4.734307-23.081285c-27.213044-132.560603-145.361678-228.722376-280.922724-228.722376-158.138159 0-286.788347 128.650188-286.788347 286.788347 0 3.209491 0.073781 6.62803 0.221344 10.772086l1.340362 37.739192-37.616223-3.910415a230.751365 230.751365 0 0 0-23.745317-1.22969c-125.071789 0-226.828653 101.756863-226.828653 226.828653s101.756863 226.828653 226.828653 226.828652h79.032189a32.857322 32.857322 0 0 1 0 65.702347h-79.032189C131.232537 915.270707 0.049188 784.03817 0.049188 622.739707c0-159.540006 128.379656-289.653525 287.255629-292.481812A352.515287 352.515287 0 0 1 863.205624 80.434035a353.941728 353.941728 0 0 1 115.775332 178.464938c153.858837 30.12741 267.223976 166.008176 267.223976 325.080899a331.290835 331.290835 0 0 1-331.266241 331.290835z"/>
                <path fill="currentColor" d="M698.033638 1023.999914a32.734353 32.734353 0 0 1-22.195908-8.607831L532.505041 883.913607l135.684016-141.315997a32.857322 32.857322 0 0 1 47.39226 45.498537l-89.115648 92.829313 93.776174 86.016829a32.857322 32.857322 0 0 1-22.208205 57.057625z"/>
            </svg>
        `
    },
    {
        name: 'Tedee Smart Lock Bluetooth API Documentation',
        link: 'https://tedee-tedee-lock-ble-api-doc.readthedocs-hosted.com/',
        description: 'The Bluetooth API provides detailed instructions on interacting directly with Tedee smart locks via Bluetooth.',
        icon: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 24 24">
                <path fill="currentColor" d="M20 8.4c-1.296-4.501-5.708-7.362-10.346-6.708C5.016 2.346 1.567 6.316 1.567 11s3.449 8.654 8.087 9.308c4.638.654 9.05-2.207 10.346-6.708h-4.13c-.929 0-1.787-.496-2.252-1.3-.464-.804-.464-1.796 0-2.6.465-.804 1.323-1.3 2.252-1.3H20zm.26 1.2h-4.39c-.773 0-1.4.627-1.4 1.4 0 .773.627 1.4 1.4 1.4h4.43c.133-.929.133-1.871 0-2.8h-.04zM11 21.6C5.146 21.6.4 16.854.4 11 .4 5.146 5.146.4 11 .4 16.854.4 21.6 5.146 21.6 11c0 2.811-1.117 5.507-3.105 7.495C16.507 20.483 13.811 21.6 11 21.6z"/>
            </svg>
        `
    },
    {
        name: 'Tedee Bridge API Documentation',
        link: `${baseHref}/bridge-api`,
        description: 'The Bridge API documentation provides information on using the Tedee Bridge to connect and control Tedee smart locks in your local network.',
        icon: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 1 22 22" fill="none">
              <rect x="3.52002" y="3.52344" width="16.96" height="16.96" rx="4.35" stroke="currentColor" stroke-width="1.3"/>
              <circle cx="12" cy="16" r="2" stroke="currentColor"/>
            </svg>
        `
    },
    {
        name: 'Tedee Dry Contact Script Documentation',
        link: `${baseHref}/dry-contact`,
        description: 'This documentation provides instructions for custom configuring the Tedee dry contact by creating your own configuration file. The Tedee dry contact connects to an existing wired system, enabling wireless control of the Tedee lock using wired signals.',
        icon: `
            <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.8128 5H8.18717C5.87466 5 4 6.66636 4 8.72193V17.2781C4 19.3336 5.87466 21 8.18717 21H17.8128C20.1253 21 22 19.3336 22 17.2781V8.72193C22 6.66636 20.1253 5 17.8128 5Z" stroke="currentColor" stroke-width="1.3"/>
              <path d="M9 12.5C9.82843 12.5 10.5 11.8284 10.5 11C10.5 10.1716 9.82843 9.5 9 9.5C8.17157 9.5 7.5 10.1716 7.5 11C7.5 11.8284 8.17157 12.5 9 12.5Z" stroke="currentColor"/>
              <rect x="8" y="16" width="10" height="2" rx="1" fill="currentColor"/>
            </svg>
        `
    },
    {
        name: 'Android Mobile SDK Documentation',
        link: 'https://github.com/tedee-com/tedee-mobile-sdk-android',
        description: 'The Android Mobile SDK allows developers to integrate Tedee lock functionalities into Android applications.',
        icon: `
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 50 50">
                <path fill="currentColor" d="M 16.375 -0.03125 C 16.332031 -0.0234375 16.289063 -0.0117188 16.25 0 C 15.921875 0.0742188 15.652344 0.304688 15.53125 0.621094 C 15.410156 0.9375 15.457031 1.289063 15.65625 1.5625 L 17.78125 4.75 C 14.183594 6.640625 11.601563 9.902344 11 13.78125 C 11 13.792969 11 13.800781 11 13.8125 C 11 13.824219 11 13.832031 11 13.84375 C 11 13.875 11 13.90625 11 13.9375 C 11 13.957031 11 13.980469 11 14 C 10.996094 14.050781 10.996094 14.105469 11 14.15625 L 11 15.5625 C 10.40625 15.214844 9.734375 15 9 15 C 6.800781 15 5 16.800781 5 19 L 5 31 C 5 33.199219 6.800781 35 9 35 C 9.734375 35 10.40625 34.785156 11 34.4375 L 11 37 C 11 38.644531 12.355469 40 14 40 L 15 40 L 15 46 C 15 48.199219 16.800781 50 19 50 C 21.199219 50 23 48.199219 23 46 L 23 40 L 27 40 L 27 46 C 27 48.199219 28.800781 50 31 50 C 33.199219 50 35 48.199219 35 46 L 35 40 L 36 40 C 37.644531 40 39 38.644531 39 37 L 39 34.4375 C 39.59375 34.785156 40.265625 35 41 35 C 43.199219 35 45 33.199219 45 31 L 45 19 C 45 16.800781 43.199219 15 41 15 C 40.265625 15 39.59375 15.214844 39 15.5625 L 39 14.1875 C 39.011719 14.09375 39.011719 14 39 13.90625 C 39 13.894531 39 13.886719 39 13.875 C 39 13.863281 39 13.855469 39 13.84375 C 38.417969 9.9375 35.835938 6.648438 32.21875 4.75 L 34.34375 1.5625 C 34.589844 1.226563 34.597656 0.773438 34.367188 0.425781 C 34.140625 0.078125 33.71875 -0.09375 33.3125 0 C 33.054688 0.0585938 32.828125 0.214844 32.6875 0.4375 L 30.34375 3.90625 C 28.695313 3.3125 26.882813 3 25 3 C 23.117188 3 21.304688 3.3125 19.65625 3.90625 L 17.3125 0.4375 C 17.113281 0.117188 16.75 -0.0625 16.375 -0.03125 Z M 25 5 C 26.878906 5 28.640625 5.367188 30.1875 6.03125 C 30.21875 6.042969 30.25 6.054688 30.28125 6.0625 C 33.410156 7.433594 35.6875 10 36.5625 13 L 13.4375 13 C 14.300781 10.042969 16.53125 7.507813 19.59375 6.125 C 19.660156 6.101563 19.722656 6.070313 19.78125 6.03125 C 21.335938 5.359375 23.109375 5 25 5 Z M 19.5 8 C 18.667969 8 18 8.671875 18 9.5 C 18 10.332031 18.667969 11 19.5 11 C 20.328125 11 21 10.332031 21 9.5 C 21 8.671875 20.328125 8 19.5 8 Z M 30.5 8 C 29.671875 8 29 8.671875 29 9.5 C 29 10.332031 29.671875 11 30.5 11 C 31.332031 11 32 10.332031 32 9.5 C 32 8.671875 31.332031 8 30.5 8 Z M 13 15 L 37 15 L 37 37 C 37 37.5625 36.5625 38 36 38 L 28.1875 38 C 28.054688 37.972656 27.914063 37.972656 27.78125 38 L 16.1875 38 C 16.054688 37.972656 15.914063 37.972656 15.78125 38 L 14 38 C 13.4375 38 13 37.5625 13 37 Z M 9 17 C 10.117188 17 11 17.882813 11 19 L 11 31 C 11 32.117188 10.117188 33 9 33 C 7.882813 33 7 32.117188 7 31 L 7 19 C 7 17.882813 7.882813 17 9 17 Z M 41 17 C 42.117188 17 43 17.882813 43 19 L 43 31 C 43 32.117188 42.117188 33 41 33 C 39.882813 33 39 32.117188 39 31 L 39 19 C 39 17.882813 39.882813 17 41 17 Z M 17 40 L 21 40 L 21 46 C 21 47.117188 20.117188 48 19 48 C 17.882813 48 17 47.117188 17 46 Z M 29 40 L 33 40 L 33 46 C 33 47.117188 32.117188 48 31 48 C 29.882813 48 29 47.117188 29 46 Z"></path>
            </svg>
        `
    },
    {
        name: 'iOS Mobile SDK Documentation',
        link: 'https://github.com/tedee-com/tedee-mobile-sdk-ios',
        description: 'The iOS Mobile SDK enables the integration of Tedee lock features into iOS applications.',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" viewBox="0 0 291.632 291.632" xml:space="preserve">
<path style="fill:currentColor;" d="M271.636,207.578c-0.792-1.913-2.341-3.413-4.278-4.145c-19.791-7.478-33.017-25.413-34.517-46.81  c-1.468-20.937,8.773-39.527,27.396-49.731c1.945-1.065,3.318-2.937,3.751-5.111c0.433-2.175-0.118-4.43-1.506-6.159  c-15.505-19.324-37.563-30.861-59.003-30.861c-10.157,0-18.085,1.762-24.929,3.95c4.422-3.369,8.465-7.292,11.891-11.689  c12.009-15.416,17.465-33.868,14.971-50.627c-0.576-3.868-4.018-6.632-7.934-6.378c-16.866,1.161-35.984,11.396-47.573,25.467  c-12.04,14.621-17.814,32.331-15.726,47.829c-1.63-0.552-3.288-1.139-5.004-1.751c-8.917-3.179-19.023-6.781-31.64-6.781  c-24.358,0-49.034,14.69-64.397,38.338c-10.983,16.907-15.602,40.81-13.005,67.304c2.7,27.55,12.711,55.175,28.953,79.89  c12.565,19.12,30.042,41.097,53.859,41.319l0.447,0.002c9.83-0.001,16.438-2.945,22.829-5.793  c6.747-3.006,13.119-5.846,24.677-5.908l0.378-0.001c11.31,0,17.473,2.824,23.998,5.814c6.27,2.873,12.753,5.844,22.567,5.844  l0.448-0.002c23.198-0.22,40.675-22.098,54.709-43.468c8.561-13.019,11.885-19.824,18.547-34.585  C272.395,211.647,272.428,209.491,271.636,207.578z M161.483,35.018c7.149-8.681,18.688-15.85,29.506-18.739  c-0.558,14.646-8.541,26.593-12.383,31.523c-7.438,9.549-18.877,16.434-29.824,18.279C148.962,58.872,151.254,47.44,161.483,35.018z   M240.46,239.881c-11.17,17.009-26.075,36.552-42.314,36.705l-0.308,0.002c-6.541,0-10.856-1.978-16.319-4.48  c-6.979-3.198-15.664-7.178-30.247-7.178l-0.461,0.001c-14.704,0.08-23.573,4.032-30.699,7.207  c-5.634,2.511-10.084,4.493-16.725,4.494l-0.308-0.002c-8.785-0.082-21.437-4.084-41.462-34.558  C32.703,198.07,25.866,141.845,45.716,111.29c12.626-19.436,32.482-31.51,51.818-31.51c10.023,0,18.077,2.871,26.604,5.911  c8.189,2.919,16.657,5.938,26.464,5.938c9.248,0,16.786-2.852,24.076-5.61c8.132-3.076,16.541-6.258,28.802-6.258  c14.552,0,29.657,6.969,41.669,18.962c-18.867,13.7-28.94,35.139-27.271,58.95c1.725,24.591,15.621,45.615,36.868,56.546  C250.231,223.96,247.056,229.851,240.46,239.881z"/>
</svg>
        `
    },
];

window.onload = () => {
    const linksWrapper = document.querySelector('.documentation-links');
    console.log(linksWrapper);
    linksWrapper && linksConfig.forEach(item => linksWrapper.append(createLinkItemElement(item)))
}

const createLinkItemElement = (item) => {
    const linkItemElement = document.createElement('div');
    linkItemElement.classList.add('documentation-link');

    linkItemElement.appendChild(createLinkIconElement(item));
    const dataElement = document.createElement('div');
    dataElement.classList.add('flex-column');

    dataElement.appendChild(createRedirectLinkElement(item));
    dataElement.appendChild(createLinkDescriptionElement(item));
    linkItemElement.appendChild(dataElement);

    return linkItemElement;
}

const createRedirectLinkElement = (item) => {
    const linkRedirectElement = document.createElement('a');
    linkRedirectElement.textContent = item.name;
    linkRedirectElement.href = item.link;
    return linkRedirectElement;
}

const createLinkDescriptionElement = (item) => {
    const linkRedirectElement = document.createElement('p');
    linkRedirectElement.textContent = item.description;
    return linkRedirectElement;
}

const createLinkIconElement = (item) => {
    const linkIconElement = document.createElement('div');
    linkIconElement.classList.add('icon');
    linkIconElement.innerHTML = item.icon;
    return linkIconElement;
}
