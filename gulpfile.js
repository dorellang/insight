// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');

// Source list
var sources = ['src/Utils.js',
    'src/CityDashboard.js',
    'src/Maps/GoogleMap.js',
    'src/Layers/Markers/Marker.js',
    'src/Layers/Markers/CircleMarker.js',
    'src/Layers/Markers/ImageMarker.js',
    'src/Layers/Markers/SimpleMarker.js',
    'src/Layers/Markers/PolylineMarker.js',
    'src/Layers/Markers/MarkerSelector.js',
    'src/Layers/Grids/Grid.js',
    'src/Layers/Grids/HexagonalGrid.js',
    'src/Layers/Grids/SquareGrid.js',
    'src/Layers/Grids/GridSelector.js',
    'src/Layers/Heatmaps/Heatmap.js',
    'src/Layers/Heatmaps/PointHeatmap.js',
    'src/Layers/Heatmaps/SegmentHeatmap.js',
    'src/Layers/Heatmaps/HeatmapSelector.js',
    'src/Layers/DTesselation/DTesselation.js',
    'src/Layers/DTesselation/Voronoi.js',
    'src/Layers/DTesselation/Delaunay.js',
    'src/Layers/DTesselation/DTesselationSelector.js',
    'src/Layers/Layer.js',
    'src/Layers/MarkerLayer.js',
    'src/Layers/GridLayer.js',
    'src/Layers/HeatmapLayer.js',
    'src/Layers/DelaunayLayer.js',
    'src/Layers/LayerSelector.js',
    'src/Visualizations/Visualization.js',
    'src/Visualizations/SummaryVisualization.js',
    'src/Visualizations/GeneralVisualization.js',
    'src/Visualizations/ChartistVisualization.js',
    'src/Visualizations/D3Visualization.js',
    'src/FilterBar.js',
    'src/InfoWindow.js',
    'src/Dashboard.js'
];

// Lint Task
gulp.task('lint', function() {
    return gulp.src('src/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('css', function() {
    gulp.src('style/**/*.css')
        .pipe(cssmin())
        .pipe(rename('CityDashboard.min.css'))
        .pipe(gulp.dest('dist'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(sources)
        .pipe(concat('CityDashboard.js'))
        .pipe(gulp.dest('tmp'))
        .pipe(rename('CityDashboard.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/**/*.js', ['lint', 'scripts']);
});

// Default Task
gulp.task('default', ['lint', 'css', 'scripts', 'watch']);
