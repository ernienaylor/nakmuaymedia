import React from 'react';
import Layout from '../../components/layout/Layout';
import VideoGrid from '../../components/videos/VideoGrid';

export default function VideosPage() {
  return (
    <Layout>
      <div className="container">
        <h1>Videos</h1>
        <VideoGrid />
      </div>
    </Layout>
  );
} 