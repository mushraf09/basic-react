import Image from "../image";
import AnchorTag from "../Anchor-tag";
import imgA from "../../assets/2.avif";
import imgB from "../../assets/5.webp";
import imgC from "../../assets/1.avif";

const projects = [
  { id: 'p1', image: imgA, title: 'Minimal Furniture Shop', category: 'Web Design', link: '#' },
  { id: 'p2', image: imgB, title: 'Cold Brew Identity', category: 'Branding', link: '#' },
  { id: 'p3', image: imgC, title: 'Wellness Mobile App', category: 'UI/UX', link: '#' },
  { id: 'p4', image: imgB, title: 'SaaS Dashboard', category: 'Development', link: '#' },
];

export default function FeaturedProjects() {
  return (
    <section className="featured-template-section">
      <div className="featured-template-grid">
        <article className="profile-card">
          <div className="profile-image-wrapper">
            <Image image={imgA} alt="Priscillia Beaumont" className="profile-image" />
          </div>
          <div className="profile-card-body">
            <h2 className="profile-name">
              Priscillia Beaumont <span className="profile-wave">👋</span>
            </h2>
            <p className="profile-role">
              A passionate <strong>Full-Stack Developer</strong> &amp; <strong>Product Designer</strong> with 12 years of experience across 24+ countries worldwide.
            </p>
            <div className="profile-actions">
              <a href="#" className="button primary-button">Book A Call</a>
              <a href="#" className="button secondary-button">Send Email</a>
            </div>
            <div className="profile-socials">
              <AnchorTag link="#" className="social-link">Facebook</AnchorTag>
              <AnchorTag link="#" className="social-link">Instagram</AnchorTag>
              <AnchorTag link="#" className="social-link">LinkedIn</AnchorTag>
              <AnchorTag link="#" className="social-link">Dribbble</AnchorTag>
            </div>
          </div>
        </article>

        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <Image image={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-card-body">
                <h3>{project.title}</h3>
                <p>{project.category}</p>
                <AnchorTag link={project.link} className="project-link">See Project</AnchorTag>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
