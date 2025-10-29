const path = require('path'); // Path is needed for the output directory
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;

// Convert module.exports to a function to access the command line arguments (argv)
module.exports = (env, argv) => {
  // Determine if the build mode is production
  const isProduction = argv.mode === 'production';
  console.log(`[ONLINE BANKING MFE CONFIG 3002] Building in ${argv.mode} mode.`);

  // Define dynamic publicPath:
  // Local (Development): Use the local port 3002
  const devPath = 'http://localhost:3002/'; 
  
  // Production (Vercel): Use the root-relative path
  // Assumes the deployment URL for this MFE is poc-webpack-repo1.vercel.app/
  const prodPath = '/online-banking-mfe-1/';

  const publicPath = isProduction ? prodPath : devPath;
  
  return {
    entry: './src/index.js',
    // Removed explicit 'mode: development' line
    
    devServer: {
      port: 3002,
      historyApiFallback: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
    
    output: {
      // 🟢 FIX 1: Define the path to write the final build files (Vercel needs this)
      path: path.resolve(__dirname, 'dist'),
      
      // 🟢 FIX 2: Set the dynamic public path
      publicPath: publicPath,
    },
    
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
      ],
    },
    
    plugins: [
      new ModuleFederationPlugin({
        name: 'OnlineBankingMFE',
        filename: 'remoteEntry.js',
        exposes: {
          './AccountSummary': './src/AccountSummary.jsx',
        },
        shared: {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: deps['react-dom'],
          },
        },
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ],
    
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  };
};