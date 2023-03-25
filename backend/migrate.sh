#!/bin/bash
echo "y" | npm run start:migrate:dev
npm run start:prisma-studio

exec $@