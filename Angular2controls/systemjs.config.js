    /**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',

            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            'ng-sidebar': 'npm:ng-sidebar',

            // other libraries
            'rxjs': 'npm:rxjs',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',

            // ng2-bootstrap
            'ng2-bootstrap': 'npm:ng2-bootstrap/bundles/ng2-bootstrap.umd.js',
            'ag-grid-ng2': 'npm:ag-grid-ng2',
            'ag-grid': 'npm:ag-grid',
            'ng2-datetime' : 'npm:ng2-datetime/ng2-datetime.js',
            // mydatepicker
            'mydatepicker': 'npm:mydatepicker/bundles/mydatepicker.umd.js',

            'angular2-color-picker': 'npm:angular2-color-picker',
            
            //ng2-drag-drop:
            'ng2-drag-drop': 'node_modules/ng2-drag-drop',
           
            //angular2-grid:
            'angular2-grid': 'npm:angular2-grid/bundles/NgGrid.umd.js',
            'angular2-google-maps/core': 'npm:angular2-google-maps/core/core.umd.js'

        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
           
            'ng2-datetime' : {
                defaultExtension : 'js'
            },
            'angular2-google-maps/core': {
                defaultExtension: 'js'
            },
            'ng2-drag-drop': { main: 'index.js', defaultExtension: 'js' },
            // ng2-bootstrap
            'ng2-bootstrap': { defaultExtension: 'js' },
            'ag-grid-ng2': {
                defaultExtension: "js"
            },
            'ag-grid': {
                defaultExtension: "js"
            },
            // mydatepicker
            mydatepicker: {
                    defaultExtension: 'js'
            },
            //side menu bar
            'ng-sidebar': {
                main: 'lib/index',
                defaultExtension: 'js'
            },
            'angular2-color-picker': { main: 'index.js', defaultExtension: 'js' },
            //ng2-drag-drop:
            'ng2-drag-drop': { main: 'index.js', defaultExtension: 'js' },

            //angular2-grid:
            //'angular2-grid': { main: 'main.js', defaultExtension: 'js' }
        }
    });
})(this);
