import { Component } from 'react';
import css from './Loader.module.css';

export class Loader extends Component {
  render() {
    return (
      <div className={css.roller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}
