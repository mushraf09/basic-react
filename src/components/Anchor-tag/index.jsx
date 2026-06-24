function AnchorTag({ link, children, className = "anchor-tag" }) {
    return (
        <a href={link} className={className}>{children || link}</a>
    );
}

export default AnchorTag;