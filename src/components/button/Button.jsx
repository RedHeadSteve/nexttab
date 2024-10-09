import './button.css';

export default function Button(props) {
    return (
        <a href="/projecten">
            <button>{props.txt}</button>
        </a>
    )
}