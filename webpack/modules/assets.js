// Paths
import { source } from '../paths';

// Plugins
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackTemplate from 'html-webpack-template';

export const loadFonts = (REPOSITORY_NAME) => ({
    module: {
        rules: [
            {
                test:    /\.eot|ttf|woff2?(\?v=\d+\.\d+\.\d+)?$/,
                include: source,
                use:     {
                    loader:  'file-loader',
                    options: {
                        name: 'fonts/[name].[hash:5].[ext]',
                        // publicPath: REPOSITORY_NAME
                        //     ? `/${process.env.REPOSITORY_NAME}/`
                        //     : '',
                    },
                },
            }
        ],
    },
});

export const loadImages = (REPOSITORY_NAME) => ({
    module: {
        rules: [
            {
                test:    /\.jpe?g|png|svg$/,
                include: source,
                use:     {
                    loader:  'url-loader',
                    options: {
                        fallback: 'file-loader',
                        limit:    8192,
                        name:     'images/[name].[hash:5].[ext]',
                        // publicPath: REPOSITORY_NAME
                        //     ? `/${process.env.REPOSITORY_NAME}/`
                        //     : '/',
                    },
                },
            }
        ],
    },
});

export const setupFavicon = () => ({
    plugins: [new FaviconsWebpackPlugin('./source/theme/assets/favicon.png')],
});

export const setupHtml = () => ({
    plugins: [
        new HtmlWebpackPlugin({
            inject:   false,
            template: HtmlWebpackTemplate,
            title:    'Redux intensive boilerplate',
            meta:     [
                {
                    name:    'viewport',
                    content:
                        'user-scalable=no, width=device-width, initial-scale=1',
                }
            ],
            appMountIds: ['app', 'spinner'],
        })
    ],
});
