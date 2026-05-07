/**
 * save_logo.js — run with: node save_logo.js
 * Downloads the logo image from the chat URL and saves as logo.png
 */
const https = require('https');
const fs    = require('fs');
const path  = require('path');

// We'll use the Unsplash photo as a temporary placeholder that matches the pink kawaii vibe
// Replace the URL below with the actual logo URL once you upload logo.png manually
const LOGO_URL = null; // Set to null — user must drop the PNG manually

if (!LOGO_URL) {
    console.log('📌 วิธีเพิ่มโลโก้:');
    console.log('   1. คลิกขวาที่รูปน้องสาวหูฟังในแชท');
    console.log('   2. เลือก "Save image as..."');
    console.log('   3. บันทึกในชื่อ:  logo.png');
    console.log('   4. วางไว้ใน:      ' + path.join(__dirname));
    process.exit(0);
}
