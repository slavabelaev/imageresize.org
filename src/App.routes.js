import ImageResizePage from './components/pages/ImageResizePage/ImageResizePage';

const routes = [
    { 
        path: '/image',
        title: 'Image Tools', 
        icon: 'image',
        showInMenu: true,
        component: ImageResizePage,
        children: [
            { 
                path: 'resize', 
                title: 'Image Resize',
                component: ImageResizePage
            },
            { 
                path: 'bulk-resize', 
                title: 'Bulk Resize',
                component: ImageResizePage
            },
            { 
                path: 'compress', 
                title: 'Compress Images',
                component: ImageResizePage
            },
            { 
                path: 'features', 
                title: 'Features',
                component: ImageResizePage
            }
        ]
    },
    { 
        path: '/pdf', 
        title: 'PDF Tools', 
        icon: 'pdf',
        showInMenu: true,
        component: ImageResizePage,
        children: [
            {
                path: 'resize', 
                title: 'PDF Resize',
                component: ImageResizePage
            },
            { 
                path: 'compress', 
                title: 'PDF Compressor',
                component: ImageResizePage
            },
            { 
                path: 'merge', 
                title: 'PDF Merge',
                component: ImageResizePage
            }
        ]
    },
    { 
        path: '/convert', 
        title: 'Convert Tools', 
        icon: 'converter',
        showInMenu: true,
        component: ImageResizePage,
        children: [
            { 
                path: 'jpg-to-pdf', 
                title: 'JPG to PDF',
                component: ImageResizePage
            },
            { 
                path: 'jpg-to-png', 
                title: 'JPG to PNG',
                component: ImageResizePage
            },
            { 
                path: 'pdf-to-jpg', 
                title: 'PDF to JPG',
                component: ImageResizePage
            },
            { 
                path: 'pdf-to-png', 
                title: 'PDF to PNG',
                component: ImageResizePage
            },
            { 
                path: 'png-to-jpg', 
                title: 'PNG to JPG',
                component: ImageResizePage
            },
            { 
                path: 'png-to-pdf', 
                title: 'PNG to PDF',
                component: ImageResizePage
            }
        ]
    },
    { 
        path: '/features', 
        title: 'Convert Tools', 
        icon: 'features',
        showInMenu: true,
        component: ImageResizePage,
        children: [
            { 
                path: 'photo-cropping', 
                title: 'Photo Cropping',
                component: ImageResizePage
            },
            { 
                path: 'photo-editing', 
                title: 'Photo Editing',
                component: ImageResizePage
            },
            { 
                path: 'photo-compressing', 
                title: 'Photo Compressing',
                component: ImageResizePage
            }
        ]
    }
];

export default routes;