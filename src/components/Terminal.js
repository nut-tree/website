import React from 'react';
import Terminal from 'react-animated-term'
import 'react-animated-term/dist/react-animated-term.css'

const termLines = [
    {
        'text': 'const { keyboard, mouse, screen, straightTo, centerOf, imageResource } = require("@nut-tree/nut-js");',
        'cmd': true
    },
    {
        'text': 'require("@nut-tree/template-matcher");',
        'cmd': true
    },
    {
        'text': '',
        'cmd': false
    },
    {
        'text': '(async () => {',
        'cmd': true
    },
    {
        'text': '\tawait keyboard.type("nut.js - Best in class node desktop automation");',
        'cmd': true
    },
    {
        'text': '',
        'cmd': true
    },
    {
        'text': '\tawait mouse.move(',
        'cmd': true
    },
    {
        'text': '\t\tstraightTo(',
        'cmd': true
    },
    {
        'text': '\t\t\tcenterOf(',
        'cmd': true
    },
    {
        'text': '\t\t\t\tscreen.find(',
        'cmd': true
    },
    {
        'text': '\t\t\t\t\timageResource("needle.png")',
        'cmd': true
    },
    {
        'text': '\t\t\t\t)',
        'cmd': true
    },
    {
        'text': '\t\t\t)',
        'cmd': true
    },
    {
        'text': '\t\t)',
        'cmd': true
    },
    {
        'text': '\t);',
        'cmd': true
    },
    {
        'text': '})();',
        'cmd': true
    },
    {
        'text': '',
        'cmd': true
    },
];

export default function DemoTerminal() {
    return (
        <Terminal
            lines={termLines}
            interval={80}
            height={450}
        />
    )
}