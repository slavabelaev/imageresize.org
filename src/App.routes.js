import ImageResizePage from './components/pages/ImageResizePage/ImageResizePage';
import ImageBulkResizePage from './components/pages/ImageBulkResizePage/ImageBulkResizePage';
import ImageCompressPage from './components/pages/ImageCompressPage/ImageCompressPage';
import ImageFeaturesPage from './components/pages/ImageFeaturesPage/ImageFeaturesPage';
import PDF_ResizePage from './components/pages/PDF_ResizePage/PDF_ResizePage';
import PDF_CompressPage from './components/pages/PDF_CompressPage/PDF_CompressPage';
import PDF_MergePage from './components/pages/PDF_MergePage/PDF_MergePage';
import Convert_JPG_to_PDF_Page from './components/pages/Convert_JPG_to_PDF_Page/Convert_JPG_to_PDF_Page';
import Convert_JPG_to_PNG_Page from './components/pages/Convert_JPG_to_PNG_Page/Convert_JPG_to_PNG_Page';
import Convert_PDF_to_JPG_Page from './components/pages/Convert_PDF_to_JPG_Page/Convert_PDF_to_JPG_Page';
import Convert_PDF_to_PNG_Page from './components/pages/Convert_PDF_to_PNG_Page/Convert_PDF_to_PNG_Page';
import Convert_PNG_to_JPG_Page from './components/pages/Convert_PNG_to_JPG_Page/Convert_PNG_to_JPG_Page';
import Convert_PNG_to_PDF_Page from './components/pages/Convert_PNG_to_PDF_Page/Convert_PNG_to_PDF_Page';
import FeatureCroppingPage from './components/pages/FeatureCroppingPage/FeatureCroppingPage';
import FeatureEditingPage from './components/pages/FeatureEditingPage/FeatureEditingPage';
import FeatureCompressingPage from './components/pages/FeatureCompressingPage/FeatureCompressingPage';
import Error_404_Page from './components/pages/Error_404_Page/Error_404_Page';

const routes = [
    {
        path: '/',
        redirectTo: '/image/resize'
    },
    {
        path: '/image',
        redirectTo: '/image/resize',
        title: 'Image Tools', 
        icon: 'image',
        showInMenu: true,
        children: [
            { 
                path: 'resize', 
                title: 'Image Resize',
                component: ImageResizePage
            },
            { 
                path: 'bulk-resize', 
                title: 'Bulk Resize',
                component: ImageBulkResizePage
            },
            { 
                path: 'compress', 
                title: 'Compress Images',
                component: ImageCompressPage
            },
            { 
                path: 'features', 
                title: 'Features',
                component: ImageFeaturesPage
            }
        ]
    },
    { 
        path: '/pdf',
        redirectTo: '/pdf/resize',
        title: 'PDF Tools', 
        icon: 'pdf',
        showInMenu: true,
        children: [
            {
                path: 'resize', 
                title: 'PDF Resize',
                component: PDF_ResizePage
            },
            { 
                path: 'compress', 
                title: 'PDF Compress',
                component: PDF_CompressPage
            },
            { 
                path: 'merge', 
                title: 'PDF Merge',
                component: PDF_MergePage
            }
        ]
    },
    { 
        path: '/convert',
        redirectTo: '/convert/jpg-to-pdf',
        title: 'Convert Tools', 
        icon: 'converter',
        showInMenu: true,
        children: [
            { 
                path: 'jpg-to-pdf', 
                title: 'JPG to PDF',
                component: Convert_JPG_to_PDF_Page
            },
            { 
                path: 'jpg-to-png', 
                title: 'JPG to PNG',
                component: Convert_JPG_to_PNG_Page
            },
            { 
                path: 'pdf-to-jpg', 
                title: 'PDF to JPG',
                component: Convert_PDF_to_JPG_Page
            },
            { 
                path: 'pdf-to-png', 
                title: 'PDF to PNG',
                component: Convert_PDF_to_PNG_Page
            },
            { 
                path: 'png-to-jpg', 
                title: 'PNG to JPG',
                component: Convert_PNG_to_JPG_Page
            },
            { 
                path: 'png-to-pdf', 
                title: 'PNG to PDF',
                component: Convert_PNG_to_PDF_Page
            }
        ]
    },
    { 
        path: '/feature',
        redirectTo: '/feature/cropping',
        title: 'Features', 
        icon: 'features',
        showInMenu: true,
        children: [
            { 
                path: 'cropping', 
                title: 'Photo Cropping',
                component: FeatureCroppingPage
            },
            { 
                path: 'editing', 
                title: 'Photo Editing',
                component: FeatureEditingPage
            },
            { 
                path: 'compressing', 
                title: 'Photo Compressing',
                component: FeatureCompressingPage
            }
        ]
    },
    {
        whenNoMatch: true,
        title: 'Error 404',
        component: Error_404_Page
    }
];

export default routes;