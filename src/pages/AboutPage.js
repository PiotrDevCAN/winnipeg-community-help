import React from 'react';
import { Divider, Typography } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

const AboutPage = () => {
  return (
    <div>
      <Title>Some basic title</Title>

      <Text>Some basice text</Text>

      <Link>Some basic link</Link>

      <Paragraph>
        Welcome to Winnipeg Cares, Winnipeg’s premier community help application dedicated to fostering connection, support, and collaboration among our vibrant city. Our mission is simple: to empower individuals and organizations to come together, share resources, and create a stronger, more resilient community.
      </Paragraph>
      <Divider />
      <Paragraph>
        Founded by a passionate group of Winnipeggers, we understand that community thrives on support. Whether you're seeking assistance, offering help, or simply looking to connect with like-minded individuals, our platform serves as a hub for local resources, volunteer opportunities, and community-driven initiatives.
      </Paragraph>
      <Divider />
      <Paragraph>
        At Winnipeg Cares, we believe in the power of unity. Our user-friendly application connects people with the help they need—be it food, shelter, mentorship, or emotional support. We strive to break down barriers and ensure that everyone has access to the resources that can make a difference in their lives.
      </Paragraph>
      <Divider />
      <Paragraph>
        Join us in building a compassionate, inclusive, and supportive Winnipeg. Together, we can make a lasting impact and create a community where everyone feels valued and connected. Thank you for being part of our journey!
      </Paragraph>
    </div>
  );
};

export default AboutPage;
