import React from 'react';
import '../Css/blog.css';

const blogs = [
  {
    title: 'Lessons, Leaders & Lightning Talks: Inside the Wave Summit',
    summary: 'I recently attended the Wave Summit, an electrifying event filled with authentic conversations, cutting-edge cybersecurity insights, and inspiring connections. Meeting industry leaders and peers reminded me that growth happens through community and shared learning. I left with clarity, courage, and a deeper sense of purpose in my cybersecurity journey—grateful to those who made the experience so impactful.',
    url: 'https://www.linkedin.com/posts/albert-ray-mukiira_what-an-incredible-group-of-individuals-i-activity-7329044930704642049-pLWv?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEBpi9EBzZXrXCdEbljIoqYUw-J1-y-IbIA'
  },
  {
    title: 'Bridging IT Support and Cybersecurity for Stronger Systems',
    summary: 'I recently completed Simplilearn’s “Introduction to CISSP: Security Assessment & Testing and Security Operations” course as part of my continuous growth in the IT field. It sharpened my ability to assess security risks, manage incidents, and implement proactive risk strategies. Though I specialize in IT support, I see cybersecurity as vital to maintaining resilient systems. By integrating both disciplines, I aim to address today’s complex tech environments more effectively. I’m looking forward to applying these insights and learning from others who are exploring the same path.',
    url: 'https://www.linkedin.com/posts/albert-ray-mukiira_cissp-activity-7281973942372741120-lgwQ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEBpi9EBzZXrXCdEbljIoqYUw-J1-y-IbIA'
  },
  {
    title: 'Breaking In Before You’re Let In: My Cybersecurity Journey Through Practice and Mentorship',
    summary: 'The post reflects on the common challenge of entry-level cybersecurity roles requiring prior experience and how the author is overcoming that barrier through hands-on learning. By actively engaging with platforms like TryHackMe, Hack The Box, Coursera, and Simplilearn, and attending Cyber Shujaa mentorship sessions, the author is building real-world skills through Capture the Flag (CTF) exercises. The journey emphasizes the importance of practice, guidance, and perseverance in breaking into the cybersecurity field.',
    url: 'https://www.linkedin.com/posts/albert-ray-mukiira_cybersecurity-tryhackme-ethicalhacking-activity-7297221501248835584-cksr?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEBpi9EBzZXrXCdEbljIoqYUw-J1-y-IbIA'
  }
];

const Blogs = () => {
  return (
    <section className="blogs-page">
      <h1 className="blogs__title">My Blogs</h1>
      <div className="blogs__list">
        {blogs.map((blog, index) => (
          <div className="blog__card" key={index}>
            <h2 className="blog__title">{blog.title}</h2>
            <p className="blog__summary">{blog.summary}</p>
            <a
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="blog__link"
            >
              Read on LinkedIn →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
