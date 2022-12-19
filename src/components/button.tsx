import styles from "./button.module.scss";

interface Props {
    title: string;
    onPress(): void;
}

export function Button({ title, onPress }: Props): JSX.Element {
    return (
        <button onClick={onPress} className={styles.button}>
            {title}
        </button>
    );
}
