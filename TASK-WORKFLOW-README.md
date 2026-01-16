# Autonomous Task Workflow - Modern One-Page Website

This project is designed to be built by multiple Claude instances working autonomously on individual tasks.

## Project Overview

Building a modern, responsive one-page website using React with:
- Clean, modern design
- Fully responsive layout
- Smooth scrolling navigation
- Multiple sections (Hero, Features, About, Contact)
- Professional styling with Tailwind CSS

## How This Works

Each task is documented in a separate markdown file (`task-01.md`, `task-02.md`, etc.). Claude instances should:

1. Read the task file
2. Check if dependencies are completed
3. Execute the task following the instructions
4. Mark the task as complete in the task file
5. Move to the next available task

## Task Order and Dependencies

Tasks must be completed in order due to dependencies:

- **Task 01**: Project Setup *(no dependencies)*
- **Task 02**: Base Layout & Component Structure *(requires Task 01)*
- **Task 03**: Header/Navigation Component *(requires Task 02)*
- **Task 04**: Hero Section *(requires Task 02)*
- **Task 05**: Features & About Sections *(requires Task 02)*
- **Task 06**: Footer & Contact Section *(requires Task 02)*
- **Task 07**: Responsive Polish & Final Touches *(requires Tasks 03-06)*

## Task Status Tracking

Each task file contains a status field at the top:
- `[ ] NOT STARTED`
- `[IN PROGRESS]`
- `[✓ COMPLETED]`

## Getting Started

1. Start with `task-01.md`
2. Follow instructions exactly
3. Update status in the task file when done
4. Move to next task

## Tech Stack

- **Framework**: React 18+ with Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Smooth Scroll**: Native CSS scroll-behavior
