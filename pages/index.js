import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Input from '../components/input/Input';

export default function Home() {
  const chamada = useCallback(() => {
    // Uma Função qualquer
  }, []);

  return (
    <div>
      <Input />
    </div>
  );
}
