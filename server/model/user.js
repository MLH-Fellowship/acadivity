const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        default: '',
    },
    email: {
        type: String,
        default: '',
    },
    password: {
        type: String,
        default: '',
    },
    projects: [{
        project_name: {
            type: String,
            default: '',
        },
        tag: {
            type: String,
            default: '',
        },
        description: {
            type: String,
            default: '',
        },
        milestones: [{
            id: {
                type: String,
                default: '',
            },
            title: {
                type: String,
                default: '',
            },
            status: {
                type: String,
                default: '',
            }
        }],
        session: [{
            start_time: {
                type: String,
                default: '',
            },
            stop_time: {
                type: String,
                default: '',
            },
            duration: {
                type: String,
                default: '',
            },
            milestones_covered: [{
                type:String,
                default:''
            }]

        }]

    }],
    attendance: [{
        subject_name: {
            type: String,
            default: '',
        },
        total_classes: {
            type: String,
            default: '',
        },
        current_attendance: {
            type: String,
            default: '',
        },
        min_threshold: {
            type: String,
            default: '',
        },
    }],
    grade: [{
        current_cgpa: {
            type: String,
            default: '',
        },
        target_cgpa: {
            type: String,
            default: '',
        },
        current_semester: {
            type: String,
            default: '',
        },
        total_credits: {
            type: String,
            default: '',
        },
    }]
});

const User = mongoose.model('User', UserSchema);
module.exports = User;