import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <Card>
      <div>About This Project</div>
      <p>This is a react app to leave feedback for a product</p>
      <p>Version: 1.0.0</p>
      <p>
        <Link to='/'>Back to Home</Link>
      </p>
    </Card>
  );
}

export default AboutPage;
