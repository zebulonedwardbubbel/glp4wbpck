import gulp from 'gulp';
import {scripts} from './webpack';
import {server} from './server';
import {styles} from './styles';
import del from 'del';

export const clean = () => del(['dist']);
export const dev = gulp.series(styles, server);
export const build = gulp.series(clean, scripts);
export default dev;