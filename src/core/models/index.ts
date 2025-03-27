import User from './contend/user-model';
import Skill from './contend/skill-model';
import Project from './contend/project-models';
import Education from './contend/education-mode';
import Experience from './contend/experience-model';

// Define associations
User.hasMany(Skill, { 
  foreignKey: 'userId',
  as: 'skills'
});

User.hasMany(Project, { 
  foreignKey: 'userId',
  as: 'projects'
});

User.hasMany(Education, { 
  foreignKey: 'userId',
  as: 'education'
});

Skill.belongsTo(User, { 
  foreignKey: 'userId',
  as: 'user'
});

Project.belongsTo(User, { 
  foreignKey: 'userId',
  as: 'user'
});

Education.belongsTo(User, { 
  foreignKey: 'userId',
  as: 'user'
});

export {
  User,
  Skill,
  Project,
  Education,
  Experience
};