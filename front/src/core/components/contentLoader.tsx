import ContentLoader from "react-content-loader"

const MyLoader = () => (
    <ContentLoader
        width={"100%"}
        height={550}
        viewBox="0 0 100% 600"
        backgroundColor="#eaeced"
        foregroundColor="#ffffff"
    >
        <rect x="0" y="0" rx="3" ry="3" width="100%" height="50" />
        <rect x="0" y="80" rx="3" ry="3" width="50%" height="30" />
        <rect x="661" y="80" rx="3" ry="3" width="50%" height="30" />
        <rect x="0" y="130" rx="3" ry="3" width="100%" height="2" />

        <rect x="0" y="160" rx="3" ry="3" width="50%" height="30" />
        <rect x="661" y="160" rx="3" ry="3" width="50%" height="30" />
        <rect x="0" y="210" rx="3" ry="3" width="100%" height="2" />

        <rect x="0" y="240" rx="3" ry="3" width="50%" height="30" />
        <rect x="661" y="240" rx="3" ry="3" width="50%" height="30" />
        <rect x="0" y="290" rx="3" ry="3" width="100%" height="2" />

        <rect x="0" y="320" rx="3" ry="3" width="50%" height="30" />
        <rect x="661" y="320" rx="3" ry="3" width="50%" height="30" />
        <rect x="0" y="370" rx="3" ry="3" width="100%" height="2" />

        <rect x="0" y="400" rx="3" ry="3" width="50%" height="30" />
        <rect x="661" y="400" rx="3" ry="3" width="50%" height="30" />
        <rect x="0" y="450" rx="3" ry="3" width="100%" height="2" />

        <rect x="0" y="480" rx="3" ry="3" width="50%" height="30" />
        <rect x="661" y="480" rx="3" ry="3" width="50%" height="30" />
        <rect x="0" y="530" rx="3" ry="3" width="100%" height="2" />

    </ContentLoader>
)

export default MyLoader;