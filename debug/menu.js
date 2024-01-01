const { Menu } = require('electron');

const createMenu = () => {
    const template = [
        {
            label: 'File',
            submenu: [
                {
                    label: 'New',
                    accelerator: 'Ctrl+N',
                    click() {
                        console.log('New');
                    },
                },
                {
                    label: 'Open',
                    accelerator: 'Ctrl+O',
                    click() {
                        console.log('Open');
                    },
                },
                {
                    label: 'Save',
                    accelerator: 'Ctrl+S',
                    click() {
                        console.log('Save');
                    },
                },
            ],
        },
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
};

module.exports = { createMenu };
