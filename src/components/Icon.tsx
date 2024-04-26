export interface IconProps {
    size?: "medium";
}

const IconSizeMap = {
    medium: ""
}

const Icons = {
    HeadingIcon: (props: IconProps) => <i className={`fa-solid fa-h ${IconSizeMap[props.size || "medium"]}`}></i>
};

export default Icons;