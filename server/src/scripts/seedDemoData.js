require('dotenv').config();
const mongoose = require('mongoose');
const { Organization } = require('../schema/organization/organizationSchema');
const { Student } = require('../schema/student/studentSchema');
const { Teacher } = require('../schema/teacher/teacher.schema');
const { ReevaluationApplication } = require('../schema/re-evaluation/reevaluationApplication.schema');

async function seedDemoData() {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');

        console.log('Clearing existing demo data...');
        await Promise.all([
            Organization.deleteOne({ orgName: 'Demo University' }),
            Student.deleteOne({ email: 'demo-student@example.com' }),
            Teacher.deleteOne({ email: 'demo-teacher@example.com' })
        ]);

        console.log('Creating demo organization...');
        const demoOrg = new Organization({
            orgName: 'Demo University',
            orgLocation: 'New York, USA',
            departments: [{ name: 'Computer Science' }, { name: 'Mathematics' }],
            noOfStudents: 5000,
            organizationEmail: 'demo-admin@example.com',
            bankDetails: {
                accountNumber: '1234567890',
                ifscCode: 'DEMO0001234',
                accountHolderName: 'Demo University',
                bankName: 'Demo Bank'
            },
            contactPerson: {
                name: 'Admin User',
                phone: '1234567890',
                designation: 'Registrar'
            },
            password: 'demo-password'
        });
        await demoOrg.save();

        console.log('Creating demo student...');
        const demoStudent = new Student({
            studentName: 'Demo Student',
            email: 'demo-student@example.com',
            password: 'demo-password',
            rollNumber: 'DEMO101',
            mobileNumber: '9876543210',
            department: 'Computer Science',
            semester: '6',
            organization: 'Demo University',
            organizationId: demoOrg._id
        });
        await demoStudent.save();

        console.log('Creating demo teacher...');
        const demoTeacher = new Teacher({
            teacherName: 'Demo Teacher',
            email: 'demo-teacher@example.com',
            password: 'demo-password',
            phoneNumber: '1122334455',
            department: 'Computer Science',
            role: 'Senior Professor',
            organization: 'Demo University',
            organizationId: demoOrg._id,
            subjects: ['Data Structures', 'Algorithms']
        });
        await demoTeacher.save();

        // Add relationships back to org
        demoOrg.students.push({
            email: demoStudent.email,
            rollNumber: demoStudent.rollNumber
        });

        demoOrg.teachers.push({
            email: demoTeacher.email,
            fullName: demoTeacher.teacherName,
            password: demoTeacher.password,
            department: demoTeacher.department,
            subjects: demoTeacher.subjects
        });

        await demoOrg.save();

        console.log('Seed completed successfully!');
        console.log('---------------------------------');
        console.log('You can now log in using these credentials:');
        console.log('Student: demo-student@example.com / prop: DEMO101 / pass: demo-password');
        console.log('Teacher: demo-teacher@example.com / pass: demo-password');
        console.log('Organization: demo-admin@example.com / pass: demo-password');
        console.log('---------------------------------');

        process.exit(0);
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
}

seedDemoData();
