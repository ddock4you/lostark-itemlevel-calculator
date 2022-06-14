const path = require("path"); //절대경로를 참조하기 위해 path를 불러오기

const HtmlWebpackPlugin = require("html-webpack-plugin"); //웹팩에서 HTML을 다루기위한 플로그인을 불러오기

// Typescript(타입스크립트)를 빌드할 때 성능을 향상시키기 위한 플러그인를 불러오기
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
    // 번들 파일로 만들기 위한 시작 파일(entry)을 설정
    //생성될 번들 파일은 js 폴더 하위에 app.js라는 이름으로 생성
    //이 파일은 ./src/App.jsx를 시작으로 번들링(하나로 합치기)합니다.
    entry: {
        "ts/app": ["./src/index.tsx"],
        // app: path.join(__dirname, "src", "index.tsx"),
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },

    //생성된 번들 파일(bundle)은 ./dist/ 폴더에 생성
    //publicPath를 지정함으로써 HTML등 다른 파일에서 생성된 번들을 참조할 때, /을 기준으로 참조
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/",
    },
    //React(리액트) 파일인 jsx와 js는 babel(바벨)을 이용하여 빌드
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: [
                    "babel-loader",
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
                exclude: /node_modules/,
            },
        ],
    },

    //./src/index.html 파일을 dist 경로에 index.html로 파일을 생성
    //파일을 생성할 때, Webpack(웹팩)이 만든 번들 파일(/js/app.js)를 HTML에 추가하여 생성
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
        }),
        // Typescript(타입스크립트)의 컴파일 속도 향상을 위한 플러그인을 설정
        new ForkTsCheckerWebpackPlugin(),
    ],
};
