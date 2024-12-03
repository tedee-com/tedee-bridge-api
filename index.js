const linksConfig = [
    {
        name: 'Cloud API Documentation',
        link: 'https://tedee-tedee-api-doc.readthedocs-hosted.com/',
        description: 'Our Cloud REST API allows you to interact with our Tedee devices. This documentation covers all the necessary endpoints and methods to integrate our cloud functionalities seamlessly into your applications.'
    },
    {
        name: 'Tedee Smart Lock Bluetooth API Documentation',
        link: 'https://tedee-tedee-lock-ble-api-doc.readthedocs-hosted.com/',
        description: 'The Bluetooth API provides detailed instructions on interacting directly with Tedee smart locks via Bluetooth.'
    },
    {
        name: 'Tedee Bridge API Documentation',
        link: 'https://docs.tedee.com/bridge-api',
        description: 'The Bridge API documentation provides information on using the Tedee Bridge to connect and control Tedee smart locks in your local network.'
    },
    {
        name: 'Tedee Dry Contact Script Documentation',
        link: 'https://docs.tedee.com/dry-contact',
        description: ''
    },
    {
        name: 'Android Mobile SDK Documentation',
        link: 'https://tedee-tedee-api-doc.readthedocs-hosted.com/en/latest/',
        description: 'The Android Mobile SDK allows developers to integrate Tedee lock functionalities into Android applications.'
    },
    {
        name: 'iOS Mobile SDK Documentation',
        link: 'https://tedee-tedee-api-doc.readthedocs-hosted.com/en/latest/',
        description: 'The iOS Mobile SDK enables the integration of Tedee lock features into iOS applications.'
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

    const linkTitleElement = createRedirectLinkElement(item);
    const linkDescriptionElement = createLinkDescriptionElement(item);

    linkItemElement.appendChild(linkTitleElement);
    linkItemElement.appendChild(linkDescriptionElement);

    return linkItemElement;
}

const createRedirectLinkElement = (item) => {
    const linkRedirectElement = document.createElement('a');
    linkRedirectElement.textContent = item.name;
    linkRedirectElement.href = item.link;
    linkRedirectElement.target = '_blank';
    return linkRedirectElement;
}

const createLinkDescriptionElement = (item) => {
    const linkRedirectElement = document.createElement('p');
    linkRedirectElement.textContent = item.description;
    return linkRedirectElement;
}