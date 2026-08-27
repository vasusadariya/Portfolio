import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2021',
    title: 'Dholakiya Schools',
    subtitle: 'Higher Secondary — Science Stream',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -3, -2.5),
    year: '2023',
    title: 'NIT Surat',
    subtitle: 'B.Tech — Electronics & Communication Engineering',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, -5, -5),
    year: '2025',
    title: 'Agora Blockchain',
    subtitle: 'Open Source & Web3 Contributor',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-3, -3, -7.5),
    year: '2025',
    title: 'Google Winter of Code',
    subtitle: '1st Place — HelperBuddy',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, -1, -10),
    year: '2025',
    title: 'Qwykli',
    subtitle: 'Software Development Intern',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -12.5),
    year: '2027',
    title: 'NIT Surat',
    subtitle: 'B.Tech Graduation — ECE',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, 0, -15),
    year: new Date().toLocaleDateString('default', { year: 'numeric' }),
    title: '?',
    subtitle: 'What\'s next...',
    position: 'right',
  }
]