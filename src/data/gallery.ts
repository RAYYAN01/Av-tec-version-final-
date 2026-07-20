export interface GalleryImage {
  src: string;
  title: string;
  service: string;
  equipment: string;
  venue?: string;
  project?: string;
}

export interface GalleryVideo {
  src: string;
  poster: string;
  title: string;
  service: string;
  equipment: string;
  venue?: string;
  duration?: string;
}

/* ============================================================
   EDIT NAMES HERE — example labels only.
   Replace `title` / `service` / `equipment` / `venue` with the
   real tool / service / event names for each media item.
   ============================================================ */

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: '/assets/images/gallery/main-stage-line-array.jpg', title: 'Main Stage Line Array', service: 'Audio Systems', equipment: 'D&B GSL Series', venue: 'Outdoor Festival' },
  { src: '/assets/images/gallery/concert-lighting-rig.jpg', title: 'Concert Lighting Rig', service: 'Stage Lighting', equipment: 'Robe MegaPointe', venue: 'Arena Show' },
  { src: '/assets/images/gallery/led-wall-product-launch.jpg', title: 'LED Wall — Product Launch', service: 'Video & LED Walls', equipment: 'P2.6 Indoor LED', venue: 'Corporate Launch' },
  { src: '/assets/images/gallery/ground-support-truss.jpg', title: 'Ground-Support Truss', service: 'Trussing & Rigging', equipment: 'Prolyte H40V', venue: 'Festival Ground' },
  { src: '/assets/images/gallery/foh-control-position.jpg', title: 'FOH Control Position', service: 'Tech Consultancy', equipment: 'DiGiCo SD12', venue: 'Conference' },
  { src: '/assets/images/gallery/auditorium-install.jpg', title: 'Auditorium Install', service: 'Installs & Integrations', equipment: 'Crestron / QSC', venue: 'Auditorium' },
  { src: '/assets/images/gallery/wedding-stage-wash.jpg', title: 'Wedding Stage Wash', service: 'Stage Lighting', equipment: 'Astera AX1', venue: 'Wedding' },
  { src: '/assets/images/gallery/corporate-keynote-screen.jpg', title: 'Corporate Keynote Screen', service: 'Video & LED Walls', equipment: 'Blackmagic ATEM', venue: 'Corporate' },
  { src: '/assets/images/gallery/monitor-world.jpg', title: 'Monitor World', service: 'Audio Systems', equipment: 'Shure PSM1000', venue: 'Live Concert' },
  { src: '/assets/images/gallery/festival-night-show.jpg', title: 'Festival Night Show', service: 'Stage Lighting', equipment: 'Clay Paky Sharpy', venue: 'Music Festival' },
  { src: '/assets/images/gallery/outdoor-led-screen.jpg', title: 'Outdoor LED Screen', service: 'Video & LED Walls', equipment: 'P6 Outdoor LED', venue: 'Public Event' },
  { src: '/assets/images/gallery/roof-rigging-build.jpg', title: 'Roof & Rigging Build', service: 'Trussing & Rigging', equipment: 'CM Lodestar Hoists', venue: 'Concert' },
  { src: '/assets/images/gallery/boardroom-av.jpg', title: 'Boardroom AV', service: 'Installs & Integrations', equipment: 'Poly Studio X', venue: 'Corporate Office' },
  { src: '/assets/images/gallery/stage-front-of-house.jpg', title: 'Stage Front-of-House', service: 'Audio Systems', equipment: 'D&B SL Subs', venue: 'Live Event' },
  { src: '/assets/images/gallery/dj-club-setup.jpg', title: 'DJ & Club Setup', service: 'Audio Systems', equipment: 'Pioneer / D&B', venue: 'Club Night' },
  { src: '/assets/images/gallery/IMG_2465.jpg', title: 'Event Production Setup', service: 'Event Production', equipment: 'Full Production Rig', venue: 'Live Event' },
  { src: '/assets/images/gallery/IMG_2466.jpg', title: 'Stage Lighting Configuration', service: 'Stage Lighting', equipment: 'Moving Head Fixtures', venue: 'Concert' },
  { src: '/assets/images/gallery/IMG_2475.jpg', title: 'LED Wall Installation', service: 'Video & LED Walls', equipment: 'Indoor LED Panels', venue: 'Corporate Event' },
  { src: '/assets/images/gallery/IMG_2476.jpg', title: 'Audio System Deployment', service: 'Audio Systems', equipment: 'Line Array Speakers', venue: 'Outdoor Festival' },
  { src: '/assets/images/gallery/IMG_2480.jpg', title: 'Truss & Rigging Structure', service: 'Trussing & Rigging', equipment: 'Prolyte Truss System', venue: 'Festival' },
  { src: '/assets/images/gallery/IMG_2542.jpg', title: 'Corporate AV Setup', service: 'Installs & Integrations', equipment: 'Conference Room AV', venue: 'Corporate Office' },
  { src: '/assets/images/gallery/IMG_3070.jpg', title: 'Stage Production Design', service: 'Event Production', equipment: 'Stage & Lighting', venue: 'Live Show' },
  { src: '/assets/images/gallery/IMG_3077.jpg', title: 'Video Wall Configuration', service: 'Video & LED Walls', equipment: 'LED Video Wall', venue: 'Product Launch' },
  { src: '/assets/images/gallery/IMG_3131.jpg', title: 'Lighting Rig Assembly', service: 'Stage Lighting', equipment: 'Moving Lights & Wash', venue: 'Concert' },
  { src: '/assets/images/gallery/IMG_3134.jpg', title: 'Sound System Installation', service: 'Audio Systems', equipment: 'Professional Audio', venue: 'Venue Install' },
  { src: '/assets/images/gallery/IMG_3202.jpg', title: 'Rigging & Truss Work', service: 'Trussing & Rigging', equipment: 'Structural Rigging', venue: 'Event Setup' },
  { src: '/assets/images/gallery/IMG_3636.jpg', title: 'LED Display Technology', service: 'Video & LED Walls', equipment: 'Fine Pitch LED', venue: 'Indoor Event' },
  { src: '/assets/images/gallery/IMG_3727.jpg', title: 'Wedding Stage Design', service: 'Stage Lighting', equipment: 'Decorative Lighting', venue: 'Wedding' },
  { src: '/assets/images/gallery/IMG_3833.jpg', title: 'Festival Production', service: 'Event Production', equipment: 'Full Production', venue: 'Music Festival' },
  { src: '/assets/images/gallery/IMG_4064.jpg', title: 'Corporate Event AV', service: 'Installs & Integrations', equipment: 'Presentation Systems', venue: 'Corporate' },
  { src: '/assets/images/gallery/IMG_4350.jpg', title: 'Live Sound Engineering', service: 'Audio Systems', equipment: 'FOH & Monitor', venue: 'Live Concert' },
  { src: '/assets/images/gallery/IMG_6586.jpg', title: 'Equipment Detail Shot', service: 'Sales & Distribution', equipment: 'AV Equipment', venue: 'Warehouse' },
  { src: '/assets/images/gallery/IMG_6587.jpg', title: 'Equipment Close-up', service: 'Sales & Distribution', equipment: 'AV Gear Detail', venue: 'Inventory' },
  { src: '/assets/images/gallery/IMG_6588.jpg', title: 'Cable & Connectivity', service: 'Tech Consultancy', equipment: 'Signal Distribution', venue: 'Technical Setup' },
  { src: '/assets/images/gallery/IMG_6589.jpg', title: 'Rack Configuration', service: 'Installs & Integrations', equipment: 'Equipment Rack', venue: 'Installation' },
  { src: '/assets/images/gallery/IMG_6590.jpg', title: 'Control Interface', service: 'Tech Consultancy', equipment: 'Control System', venue: 'Technical' },
  { src: '/assets/images/gallery/IMG_7323.jpg', title: 'Stage Wash Lighting', service: 'Stage Lighting', equipment: 'Wash Fixtures', venue: 'Event' },
  { src: '/assets/images/gallery/IMG_7388.PNG', title: 'Technical Diagram', service: 'Tech Consultancy', equipment: 'System Design', venue: 'Planning' },
];

export const GALLERY_VIDEOS: GalleryVideo[] = [
  { src: '/assets/videos/gallery/event-highlights-reel.mp4', poster: '/assets/images/gallery/main-stage-line-array.jpg', title: 'Event Highlights Reel', service: 'Event Production', equipment: 'Full Production', duration: '0:30' },
  { src: '/assets/videos/gallery/rental-showcase.mp4', poster: '/assets/images/gallery/concert-lighting-rig.jpg', title: 'Rental Showcase', service: 'Rental', equipment: 'Sound · Light · Video', duration: '0:25' },
  { src: '/assets/videos/gallery/equipment-walkthrough.mp4', poster: '/assets/images/gallery/led-wall-product-launch.jpg', title: 'Equipment Walkthrough', service: 'Sales & Distribution', equipment: 'Inventory Tour', duration: '0:40' },
  { src: '/assets/videos/gallery/why-avtec.mp4', poster: '/assets/images/gallery/foh-control-position.jpg', title: 'Why AV-TEC', service: 'About', equipment: 'Since 1992', duration: '0:35' },
  { src: '/assets/videos/gallery/live-show-clip-1.mp4', poster: '/assets/images/gallery/festival-night-show.jpg', title: 'Live Show Clip 1', service: 'Stage Lighting', equipment: 'Moving Heads', duration: '0:15' },
  { src: '/assets/videos/gallery/live-show-clip-2.mp4', poster: '/assets/images/gallery/concert-lighting-rig.jpg', title: 'Live Show Clip 2', service: 'Stage Lighting', equipment: 'Beam Effects', duration: '0:15' },
  { src: '/assets/videos/gallery/live-show-clip-3.mp4', poster: '/assets/images/gallery/ground-support-truss.jpg', title: 'Live Show Clip 3', service: 'Trussing & Rigging', equipment: 'Roof System', duration: '0:15' },
  { src: '/assets/videos/gallery/live-show-clip-4.mp4', poster: '/assets/images/gallery/led-wall-product-launch.jpg', title: 'Live Show Clip 4', service: 'Video & LED Walls', equipment: 'LED Wall', duration: '0:15' },
  { src: '/assets/videos/gallery/live-show-clip-5.mp4', poster: '/assets/images/gallery/monitor-world.jpg', title: 'Live Show Clip 5', service: 'Audio Systems', equipment: 'Line Array', duration: '0:15' },
  { src: '/assets/videos/gallery/live-show-clip-6.mp4', poster: '/assets/images/gallery/outdoor-led-screen.jpg', title: 'Live Show Clip 6', service: 'Video & LED Walls', equipment: 'Outdoor LED', duration: '0:15' },
  { src: '/assets/videos/gallery/live-show-clip-7.mp4', poster: '/assets/images/gallery/wedding-stage-wash.jpg', title: 'Live Show Clip 7', service: 'Stage Lighting', equipment: 'Pixel Mapping', duration: '0:15' },
  { src: '/assets/videos/gallery/live-show-clip-8.mp4', poster: '/assets/images/gallery/roof-rigging-build.jpg', title: 'Live Show Clip 8', service: 'Trussing & Rigging', equipment: 'Chain Hoists', duration: '0:15' },
  { src: '/assets/videos/gallery/live-show-clip-9.mp4', poster: '/assets/images/gallery/stage-front-of-house.jpg', title: 'Live Show Clip 9', service: 'Audio Systems', equipment: 'Subwoofers', duration: '0:15' },
  { src: '/assets/videos/gallery/live-show-clip-10.mp4', poster: '/assets/images/gallery/corporate-keynote-screen.jpg', title: 'Live Show Clip 10', service: 'Video & LED Walls', equipment: 'Live IMAG', duration: '0:15' },
  { src: '/assets/videos/gallery/live-show-clip-11.mp4', poster: '/assets/images/gallery/auditorium-install.jpg', title: 'Live Show Clip 11', service: 'Installs & Integrations', equipment: 'Fixed Install', duration: '0:15' },
  { src: '/assets/videos/gallery/live-show-clip-12.mp4', poster: '/assets/images/gallery/boardroom-av.jpg', title: 'Live Show Clip 12', service: 'Event Production', equipment: 'Show Control', duration: '0:15' },
  { src: '/assets/videos/gallery/img-2412.mov', poster: '/assets/images/gallery/main-stage-line-array.jpg', title: 'Full Event Production', service: 'Event Production', equipment: 'Complete Production', duration: '5:00' },
  { src: '/assets/videos/gallery/img-2713.mov', poster: '/assets/images/gallery/concert-lighting-rig.jpg', title: 'Concert Lighting Show', service: 'Stage Lighting', equipment: 'Moving Light Rig', duration: '3:00' },
  { src: '/assets/videos/gallery/img-2715.mov', poster: '/assets/images/gallery/led-wall-product-launch.jpg', title: 'LED Wall Demo', service: 'Video & LED Walls', equipment: 'LED Display', duration: '2:30' },
  { src: '/assets/videos/gallery/img-2720.mov', poster: '/assets/images/gallery/ground-support-truss.jpg', title: 'Truss Installation', service: 'Trussing & Rigging', equipment: 'Structural Truss', duration: '4:00' },
  { src: '/assets/videos/gallery/img-2864.mov', poster: '/assets/images/gallery/festival-night-show.jpg', title: 'Festival Highlights', service: 'Event Production', equipment: 'Full Production', duration: '1:30' },
  { src: '/assets/videos/gallery/img-3203.mov', poster: '/assets/images/gallery/stage-front-of-house.jpg', title: 'Live Sound Mix', service: 'Audio Systems', equipment: 'FOH Console', duration: '3:30' },
  { src: '/assets/videos/gallery/img-3250.mov', poster: '/assets/images/gallery/led-wall-product-launch.jpg', title: 'Video Wall Showcase', service: 'Video & LED Walls', equipment: 'LED Video Wall', duration: '4:00' },
  { src: '/assets/videos/gallery/img-3634.mov', poster: '/assets/images/gallery/concert-lighting-rig.jpg', title: 'Lighting Programming', service: 'Stage Lighting', equipment: 'Lighting Console', duration: '2:30' },
  { src: '/assets/videos/gallery/img-3725.mov', poster: '/assets/images/gallery/wedding-stage-wash.jpg', title: 'Wedding Lighting', service: 'Stage Lighting', equipment: 'Decorative Lighting', duration: '1:15' },
  { src: '/assets/videos/gallery/img-3728.mov', poster: '/assets/images/gallery/outdoor-led-screen.jpg', title: 'Outdoor LED Display', service: 'Video & LED Walls', equipment: 'Outdoor LED', duration: '1:15' },
  { src: '/assets/videos/gallery/img-3840.mov', poster: '/assets/images/gallery/main-stage-line-array.jpg', title: 'Line Array Setup', service: 'Audio Systems', equipment: 'Line Array', duration: '1:00' },
  { src: '/assets/videos/gallery/img-4003.mov', poster: '/assets/images/gallery/festival-night-show.jpg', title: 'Stage Production', service: 'Event Production', equipment: 'Stage & Lighting', duration: '1:15' },
  { src: '/assets/videos/gallery/img-4004.mov', poster: '/assets/images/gallery/concert-lighting-rig.jpg', title: 'Concert Lighting Full', service: 'Stage Lighting', equipment: 'Full Lighting Rig', duration: '4:30' },
  { src: '/assets/videos/gallery/img-4006.mov', poster: '/assets/images/gallery/led-wall-product-launch.jpg', title: 'Corporate LED Wall', service: 'Video & LED Walls', equipment: 'Indoor LED', duration: '3:00' },
  { src: '/assets/videos/gallery/img-4012.mov', poster: '/assets/images/gallery/ground-support-truss.jpg', title: 'Rigging Build Timelapse', service: 'Trussing & Rigging', equipment: 'Truss Build', duration: '3:15' },
  { src: '/assets/videos/gallery/img-4018.mov', poster: '/assets/images/gallery/stage-front-of-house.jpg', title: 'Audio System Tuning', service: 'Audio Systems', equipment: 'System Tuning', duration: '2:15' },
  { src: '/assets/videos/gallery/img-4062.mov', poster: '/assets/images/gallery/festival-night-show.jpg', title: 'Festival Stage Build', service: 'Event Production', equipment: 'Stage Construction', duration: '1:20' },
  { src: '/assets/videos/gallery/img-4089.mov', poster: '/assets/images/gallery/main-stage-line-array.jpg', title: 'Large Format Sound', service: 'Audio Systems', equipment: 'Large Scale Audio', duration: '4:15' },
  { src: '/assets/videos/gallery/img-4094.mov', poster: '/assets/images/gallery/concert-lighting-rig.jpg', title: 'Lighting Design Show', service: 'Stage Lighting', equipment: 'Design Demo', duration: '3:00' },
  { src: '/assets/videos/gallery/img-4095.mov', poster: '/assets/images/gallery/led-wall-product-launch.jpg', title: 'LED Installation Process', service: 'Video & LED Walls', equipment: 'LED Install', duration: '3:00' },
  { src: '/assets/videos/gallery/img-4154.mov', poster: '/assets/images/gallery/ground-support-truss.jpg', title: 'Truss System Demo', service: 'Trussing & Rigging', equipment: 'Truss Demo', duration: '2:45' },
  { src: '/assets/videos/gallery/img-4189.mov', poster: '/assets/images/gallery/stage-front-of-house.jpg', title: 'Sound Check Session', service: 'Audio Systems', equipment: 'Sound Check', duration: '2:00' },
  { src: '/assets/videos/gallery/img-4190.mov', poster: '/assets/images/gallery/festival-night-show.jpg', title: 'Event Load In', service: 'Event Production', equipment: 'Load In', duration: '1:15' },
  { src: '/assets/videos/gallery/img-4192.mov', poster: '/assets/images/gallery/concert-lighting-rig.jpg', title: 'Lighting Focus', service: 'Stage Lighting', equipment: 'Focus Session', duration: '1:20' },
  { src: '/assets/videos/gallery/img-4439.mov', poster: '/assets/images/gallery/led-wall-product-launch.jpg', title: 'Video Wall Content', service: 'Video & LED Walls', equipment: 'Content Playback', duration: '1:00' },
  { src: '/assets/videos/gallery/img-4476.mov', poster: '/assets/images/gallery/main-stage-line-array.jpg', title: 'Sound System Demo', service: 'Audio Systems', equipment: 'System Demo', duration: '3:30' },
  { src: '/assets/videos/gallery/img-4593.mov', poster: '/assets/images/gallery/festival-night-show.jpg', title: 'Festival Production', service: 'Event Production', equipment: 'Festival Setup', duration: '3:15' },
  { src: '/assets/videos/gallery/img-4630.mov', poster: '/assets/images/gallery/concert-lighting-rig.jpg', title: 'Moving Light Show', service: 'Stage Lighting', equipment: 'Moving Heads', duration: '3:10' },
  { src: '/assets/videos/gallery/img-4808.mov', poster: '/assets/images/gallery/led-wall-product-launch.jpg', title: 'LED Wall Installation', service: 'Video & LED Walls', equipment: 'Installation', duration: '4:00' },
  { src: '/assets/videos/gallery/img-5022.mov', poster: '/assets/images/gallery/ground-support-truss.jpg', title: 'Rigging Safety Check', service: 'Trussing & Rigging', equipment: 'Safety Inspection', duration: '2:20' },
  { src: '/assets/videos/gallery/img-5023.mov', poster: '/assets/images/gallery/stage-front-of-house.jpg', title: 'Audio Engineering', service: 'Audio Systems', equipment: 'Engineering', duration: '1:45' },
  { src: '/assets/videos/gallery/img-5576.mov', poster: '/assets/images/gallery/festival-night-show.jpg', title: 'Stage Management', service: 'Event Production', equipment: 'Stage Mgmt', duration: '1:10' },
  { src: '/assets/videos/gallery/img-5620.mov', poster: '/assets/images/gallery/concert-lighting-rig.jpg', title: 'Lighting Console Ops', service: 'Stage Lighting', equipment: 'Console Operation', duration: '1:45' },
  { src: '/assets/videos/gallery/img-5946.mov', poster: '/assets/images/gallery/led-wall-product-launch.jpg', title: 'Video Wall Operation', service: 'Video & LED Walls', equipment: 'Wall Operation', duration: '2:20' },
  { src: '/assets/videos/gallery/img-6281.mov', poster: '/assets/images/gallery/main-stage-line-array.jpg', title: 'System Optimization', service: 'Audio Systems', equipment: 'Optimization', duration: '1:25' },
  { src: '/assets/videos/gallery/img-6285.mov', poster: '/assets/images/gallery/festival-night-show.jpg', title: 'Production Wrap', service: 'Event Production', equipment: 'Strike', duration: '2:25' },
  { src: '/assets/videos/gallery/img-6374.mov', poster: '/assets/images/gallery/concert-lighting-rig.jpg', title: 'Lighting Cue Stack', service: 'Stage Lighting', equipment: 'Cue Programming', duration: '2:35' },
  { src: '/assets/videos/gallery/img-6462.mov', poster: '/assets/images/gallery/led-wall-product-launch.jpg', title: 'LED Calibration', service: 'Video & LED Walls', equipment: 'Calibration', duration: '3:20' },
  { src: '/assets/videos/gallery/img-6487.mov', poster: '/assets/images/gallery/ground-support-truss.jpg', title: 'Truss Load Test', service: 'Trussing & Rigging', equipment: 'Load Testing', duration: '1:00' },
  { src: '/assets/videos/gallery/img-6558.mov', poster: '/assets/images/gallery/stage-front-of-house.jpg', title: 'Monitor Mix Session', service: 'Audio Systems', equipment: 'Monitor Mix', duration: '2:45' },
  { src: '/assets/videos/gallery/img-6585.mp4', poster: '/assets/images/gallery/festival-night-show.jpg', title: 'Event Walkthrough', service: 'Event Production', equipment: 'Venue Walkthrough', duration: '1:05' },
  { src: '/assets/videos/gallery/img-7271.mov', poster: '/assets/images/gallery/concert-lighting-rig.jpg', title: 'Lighting Effects Demo', service: 'Stage Lighting', equipment: 'Effects Demo', duration: '2:00' },
  { src: '/assets/videos/gallery/img-7298.mov', poster: '/assets/images/gallery/led-wall-product-launch.jpg', title: 'Display Technology', service: 'Video & LED Walls', equipment: 'Display Tech', duration: '1:55' },
  { src: '/assets/videos/gallery/img-7355.mp4', poster: '/assets/images/gallery/main-stage-line-array.jpg', title: 'Sound System Design', service: 'Audio Systems', equipment: 'System Design', duration: '1:10' },
  { src: '/assets/videos/gallery/img-7392.mov', poster: '/assets/images/gallery/festival-night-show.jpg', title: 'Show Programming', service: 'Event Production', equipment: 'Show Control', duration: '1:15' },
  { src: '/assets/videos/gallery/img-7393.mov', poster: '/assets/images/gallery/concert-lighting-rig.jpg', title: 'Concert Lighting Full Set', service: 'Stage Lighting', equipment: 'Full Lighting Set', duration: '3:20' },
  { src: '/assets/videos/gallery/img-7412.mov', poster: '/assets/images/gallery/led-wall-product-launch.jpg', title: 'LED Processing', service: 'Video & LED Walls', equipment: 'Video Processing', duration: '2:05' },
  { src: '/assets/videos/gallery/img-7413.mov', poster: '/assets/images/gallery/ground-support-truss.jpg', title: 'Rigging Inspection', service: 'Trussing & Rigging', equipment: 'Inspection', duration: '1:50' },
  { src: '/assets/videos/gallery/img-7690.mov', poster: '/assets/images/gallery/stage-front-of-house.jpg', title: 'FOH Engineering', service: 'Audio Systems', equipment: 'Front of House', duration: '3:20' },
  { src: '/assets/videos/gallery/img-7691.mov', poster: '/assets/images/gallery/festival-night-show.jpg', title: 'Stage Strike', service: 'Event Production', equipment: 'Strike', duration: '1:15' },
  { src: '/assets/videos/gallery/img-7706.mov', poster: '/assets/images/gallery/concert-lighting-rig.jpg', title: 'Lighting Load Out', service: 'Stage Lighting', equipment: 'Load Out', duration: '1:25' },
  { src: '/assets/videos/gallery/img-7708.mov', poster: '/assets/images/gallery/led-wall-product-launch.jpg', title: 'LED Wall Strike', service: 'Video & LED Walls', equipment: 'Wall Strike', duration: '4:00' },
  { src: '/assets/videos/gallery/img-7710.mov', poster: '/assets/images/gallery/main-stage-line-array.jpg', title: 'Audio Load Out', service: 'Audio Systems', equipment: 'Audio Strike', duration: '2:25' },
  { src: '/assets/videos/gallery/vid-20220320-215103.mp4', poster: '/assets/images/gallery/festival-night-show.jpg', title: 'Archival Event Footage', service: 'Event Production', equipment: 'Archival', duration: '9:40' },
];
