import React from 'react'

import AngularIcon from '@icons/jsx/technologies/Angular'
import AstroIcon from '@icons/jsx/technologies/Astro'
import AWSIcon from '@icons/jsx/technologies/AWS'
import DockerIcon from '@icons/jsx/technologies/Docker'
import FlutterIcon from '@icons/jsx/technologies/Flutter'
import GoogleCloudIcon from '@icons/jsx/technologies/Google Cloud'
import JavaIcon from '@icons/jsx/technologies/Java'
import JavaScriptIcon from '@icons/jsx/technologies/JavaScript'
import KubernetesIcon from '@icons/jsx/technologies/Kubernetes'
import LaravelIcon from '@icons/jsx/technologies/Laravel'
import MongoDBIcon from '@icons/jsx/technologies/MongoDB'
import MySQLIcon from '@icons/jsx/technologies/MySQL'
import NextjsIcon from '@icons/jsx/technologies/Nextjs'
import NodejsIcon from '@icons/jsx/technologies/Nodejs'
import OpenAIAPIIcon from '@icons/jsx/technologies/OpenAI API'
import PHPIcon from '@icons/jsx/technologies/PHP'
import PostgreSQLIcon from '@icons/jsx/technologies/PostgreSQL'
import PythonIcon from '@icons/jsx/technologies/Python'
import ReactIcon from '@icons/jsx/technologies/React'
import SpringIcon from '@icons/jsx/technologies/Spring'
import TailwindCSSIcon from '@icons/jsx/technologies/TailwindCSS'
import TypeScriptIcon from '@icons/jsx/technologies/TypeScript'
import UnityIcon from '@icons/jsx/technologies/Unity'
import UnrealEngineIcon from '@icons/jsx/technologies/Unreal Engine'
import VuejsIcon from '@icons/jsx/technologies/Vuejs'

import type { Technology } from '../types/app'

export default function TechnologyIcon({ name }: { name: Technology }): JSX.Element {
  if (name === 'Angular') return <AngularIcon />
  if (name === 'Astro') return <AstroIcon />
  if (name === 'AWS') return <AWSIcon />
  if (name === 'Docker') return <DockerIcon />
  if (name === 'Flutter') return <FlutterIcon />
  if (name === 'Google Cloud') return <GoogleCloudIcon />
  if (name === 'Java') return <JavaIcon />
  if (name === 'JavaScript') return <JavaScriptIcon />
  if (name === 'Kubernetes') return <KubernetesIcon />
  if (name === 'Laravel') return <LaravelIcon />
  if (name === 'MongoDB') return <MongoDBIcon />
  if (name === 'MySQL') return <MySQLIcon />
  if (name === 'Nextjs') return <NextjsIcon />
  if (name === 'Nodejs') return <NodejsIcon />
  if (name === 'OpenAI API') return <OpenAIAPIIcon />
  if (name === 'PHP') return <PHPIcon />
  if (name === 'PostgreSQL') return <PostgreSQLIcon />
  if (name === 'Python') return <PythonIcon />
  if (name === 'React') return <ReactIcon />
  if (name === 'Spring') return <SpringIcon />
  if (name === 'TailwindCSS') return <TailwindCSSIcon />
  if (name === 'TypeScript') return <TypeScriptIcon />
  if (name === 'Unity') return <UnityIcon />
  if (name === 'Unreal Engine') return <UnrealEngineIcon />
  if (name === 'Vuejs') return <VuejsIcon />

  return <i>?</i>
}
