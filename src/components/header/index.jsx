'use strict';
import {
  h,
  Component,
} from 'lib/preact';
import { Link } from 'lib/router';
import style from './style.scss';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1>Preact App</h1>
				<nav>
					<Link href="/">Home</Link>
					<Link href="/profile">Me</Link>
					<Link href="/profile/john">John</Link>
				</nav>
			</header>
		);
	}
}
