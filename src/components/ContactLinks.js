import React from 'react';

class ContactLinks extends React.PureComponent {
  render() {
    return (
      <div className="contact-links">
        <span>
          <a rel="noopener" target="_blank" href="mailto:sj3327@columbia.edu">
            sj3327@columbia.edu
          </a>
        </span>
        <span>
          <a
            rel="noopener"
            target="_blank"
            href="https://www.linkedin.com/in/shikhar-johri/"
          >
            LinkedIn
          </a>
        </span>
        <span>
          <a rel="noopener" target="_blank" href="https://github.com/johri-lab">
            github
          </a>
        </span>
      </div>
    );
  }
}

export default ContactLinks;