import type { Schema, Attribute } from '@strapi/strapi';

export interface ProjectProject extends Schema.Component {
  collectionName: 'components_project_projects';
  info: {
    displayName: 'Project';
    description: '';
  };
  attributes: {
    projectName: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 35;
      }>;
    projectSummary: Attribute.Text & Attribute.Required & Attribute.Unique;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'project.project': ProjectProject;
    }
  }
}
