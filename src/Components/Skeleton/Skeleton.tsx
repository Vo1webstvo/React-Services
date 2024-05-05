import ContentLoader from 'react-content-loader';

const Skeleton = (props: any) => (
  <ContentLoader viewBox="0 0 500 280" height={280} width={500} {...props}>
    <rect x="0" y="20" rx="0" ry="0" width="1080" height="50" />
    <rect x="0" y="80" rx="0" ry="0" width="1080" height="50" />
    <rect x="0" y="140" rx="0" ry="0" width="1080" height="50" />
    <rect x="0" y="200" rx="0" ry="0" width="1080" height="50" />
    <rect x="0" y="260" rx="0" ry="0" width="1080" height="50" />
    <rect x="0" y="320" rx="0" ry="0" width="1080" height="50" />
    <rect x="0" y="380" rx="0" ry="0" width="1080" height="50" />
    <rect x="0" y="450" rx="0" ry="0" width="1080" height="50" />
    <rect x="0" y="510" rx="0" ry="0" width="1080" height="50" />
    <rect x="0" y="570" rx="0" ry="0" width="1080" height="50" />
    <rect x="0" y="630" rx="0" ry="0" width="1080" height="50" />
  </ContentLoader>
);

export default Skeleton;
