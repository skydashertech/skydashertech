import React, { useState, useCallback, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, MessageSquare } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  
  const RECAPTCHA_SITE_KEY = '6Leihk8sAAAAAG_-n_bpQsRuLGHH-12p8SziLk7s';
  const RECAPTCHA_SECRET_KEY = '6Leihk8sAAAAANtdd368hiTXVFMSyRpdXuRuV5rl';

  const handleRecaptchaChange = useCallback((token: string | null) => {
    setRecaptchaToken(token);
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!recaptchaToken) {
      alert('❌ Please complete the reCAPTCHA verification.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://send-mail-redirect-boostmysites.vercel.app/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: "skydashertech@gmail.com",
          subject: "New Project Enquiry - SkyDasher Tech",
          body: `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.countryCode} ${formData.phone}\nCompany: ${formData.company}\nService: ${formData.service}\n\nMessage:\n${formData.message}`,
          name: 'SkyDasher Tech',
          recaptchaToken: recaptchaToken,
          recaptchaSecretKey: RECAPTCHA_SECRET_KEY
        }),
      });

      if (response.ok) {
        alert('✅ Thank you! Your inquiry has been sent to SkyDasher Tech. We will contact you soon.');
        setFormData({
          name: '',
          email: '',
          countryCode: '+91',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
        setRecaptchaToken(null);
        recaptchaRef.current?.reset();
      } else {
        throw new Error('Failed to send email');
      }

    } catch (error) {
      console.error('Error processing form:', error);
      alert('❌ Sorry, there was an error. Please try again later or contact us directly via email: skydashertech@gmail.com');
      setRecaptchaToken(null);
      recaptchaRef.current?.reset();
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, recaptchaToken]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }, []);

  const isFormValid = formData.name && formData.email && formData.phone && formData.company && formData.service && formData.message && recaptchaToken;

  return (
    <section id="contact" className="py-12 sm:py-16" style={{ backgroundColor: '#f8f8ff' }}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Get In <span style={{ color: '#FF3C1A' }}>Touch</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Ready to start your next project? Contact us today for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Contact Information</h3>

                <div className="space-y-3 sm:space-y-4">
                  {[
                    {
                      icon: Phone,
                      title: "Phone",
                      content: "+91 913 56 76 155",
                      link: "https://wa.me/919135676155"
                    },
                    {
                      icon: Mail,
                      title: "Email",
                      content: "skydashertech@gmail.com",
                      link: "mailto:skydashertech@gmail.com"
                    },
                    {
                      icon: MapPin,
                      title: "Location",
                      content: "Coimbatore, India",
                      link: null
                    },
                    {
                      icon: Clock,
                      title: "Business Hours",
                      content: "Monday - Friday: 9:00 AM - 6:00 PM",
                      link: null
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center mr-3 text-white flex-shrink-0" style={{ backgroundColor: '#FF3C1A' }}>
                        <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1 text-sm">{item.title}</p>
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors duration-200 text-sm"
                            style={{ color: '#FF3C1A' }}
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p style={{ color: '#FF3C1A' }} className="text-sm">{item.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl" style={{ backgroundColor: 'rgba(255, 60, 26, 0.1)' }}>
                <div className="flex items-center mb-3">
                  <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 mr-2" style={{ color: '#FF3C1A' }} />
                  <h4 className="font-bold text-gray-900 text-sm">Why Choose SkyDasher Tech?</h4>
                </div>
                <ul className="space-y-2 text-xs text-gray-600">
                  {[
                    "Free consultation and project analysis",
                    "24/7 technical support and maintenance",
                    "Agile development methodology",
                    "100% satisfaction guarantee"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-2 sm:mr-3 flex-shrink-0" style={{ color: '#212720' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="countryCode" className="block text-sm font-semibold text-gray-700 mb-2">
                    Country Code *
                  </label>
                  <select
                    id="countryCode"
                    name="countryCode"
                    required
                    value={formData.countryCode || '+91'}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  >
                    <option value="+93">🇦🇫 Afghanistan (+93)</option>
                    <option value="+355">🇦🇱 Albania (+355)</option>
                    <option value="+213">🇩🇿 Algeria (+213)</option>
                    <option value="+1684">🇦🇸 American Samoa (+1684)</option>
                    <option value="+376">🇦🇩 Andorra (+376)</option>
                    <option value="+244">🇦🇴 Angola (+244)</option>
                    <option value="+1264">🇦🇮 Anguilla (+1264)</option>
                    <option value="+672">🇦🇶 Antarctica (+672)</option>
                    <option value="+1268">🇦🇬 Antigua and Barbuda (+1268)</option>
                    <option value="+54">🇦🇷 Argentina (+54)</option>
                    <option value="+374">🇦🇲 Armenia (+374)</option>
                    <option value="+297">🇦🇼 Aruba (+297)</option>
                    <option value="+61">🇦🇺 Australia (+61)</option>
                    <option value="+43">🇦🇹 Austria (+43)</option>
                    <option value="+994">🇦🇿 Azerbaijan (+994)</option>
                    <option value="+1242">🇧🇸 Bahamas (+1242)</option>
                    <option value="+973">🇧🇭 Bahrain (+973)</option>
                    <option value="+880">🇧🇩 Bangladesh (+880)</option>
                    <option value="+1246">🇧🇧 Barbados (+1246)</option>
                    <option value="+375">🇧🇾 Belarus (+375)</option>
                    <option value="+32">🇧🇪 Belgium (+32)</option>
                    <option value="+501">🇧🇿 Belize (+501)</option>
                    <option value="+229">🇧🇯 Benin (+229)</option>
                    <option value="+1441">🇧🇲 Bermuda (+1441)</option>
                    <option value="+975">🇧🇹 Bhutan (+975)</option>
                    <option value="+591">🇧🇴 Bolivia (+591)</option>
                    <option value="+387">🇧🇦 Bosnia and Herzegovina (+387)</option>
                    <option value="+267">🇧🇼 Botswana (+267)</option>
                    <option value="+55">🇧🇷 Brazil (+55)</option>
                    <option value="+246">🇮🇴 British Indian Ocean Territory (+246)</option>
                    <option value="+673">🇧🇳 Brunei (+673)</option>
                    <option value="+359">🇧🇬 Bulgaria (+359)</option>
                    <option value="+226">🇧🇫 Burkina Faso (+226)</option>
                    <option value="+257">🇧🇮 Burundi (+257)</option>
                    <option value="+855">🇰🇭 Cambodia (+855)</option>
                    <option value="+237">🇨🇲 Cameroon (+237)</option>
                    <option value="+1">🇨🇦 Canada (+1)</option>
                    <option value="+238">🇨🇻 Cape Verde (+238)</option>
                    <option value="+1345">🇰🇾 Cayman Islands (+1345)</option>
                    <option value="+236">🇨🇫 Central African Republic (+236)</option>
                    <option value="+235">🇹🇩 Chad (+235)</option>
                    <option value="+56">🇨🇱 Chile (+56)</option>
                    <option value="+86">🇨🇳 China (+86)</option>
                    <option value="+61">🇨🇽 Christmas Island (+61)</option>
                    <option value="+61">🇨🇨 Cocos Islands (+61)</option>
                    <option value="+57">🇨🇴 Colombia (+57)</option>
                    <option value="+269">🇰🇲 Comoros (+269)</option>
                    <option value="+242">🇨🇬 Congo (+242)</option>
                    <option value="+243">🇨🇩 Congo (DRC) (+243)</option>
                    <option value="+682">🇨🇰 Cook Islands (+682)</option>
                    <option value="+506">🇨🇷 Costa Rica (+506)</option>
                    <option value="+225">🇨🇮 Côte d'Ivoire (+225)</option>
                    <option value="+385">🇭🇷 Croatia (+385)</option>
                    <option value="+53">🇨🇺 Cuba (+53)</option>
                    <option value="+599">🇨🇼 Curaçao (+599)</option>
                    <option value="+357">🇨🇾 Cyprus (+357)</option>
                    <option value="+420">🇨🇿 Czech Republic (+420)</option>
                    <option value="+45">🇩🇰 Denmark (+45)</option>
                    <option value="+253">🇩🇯 Djibouti (+253)</option>
                    <option value="+1767">🇩🇲 Dominica (+1767)</option>
                    <option value="+1809">🇩🇴 Dominican Republic (+1809)</option>
                    <option value="+593">🇪🇨 Ecuador (+593)</option>
                    <option value="+20">🇪🇬 Egypt (+20)</option>
                    <option value="+503">🇸🇻 El Salvador (+503)</option>
                    <option value="+240">🇬🇶 Equatorial Guinea (+240)</option>
                    <option value="+291">🇪🇷 Eritrea (+291)</option>
                    <option value="+372">🇪🇪 Estonia (+372)</option>
                    <option value="+268">🇸🇿 Eswatini (+268)</option>
                    <option value="+251">🇪🇹 Ethiopia (+251)</option>
                    <option value="+500">🇫🇰 Falkland Islands (+500)</option>
                    <option value="+298">🇫🇴 Faroe Islands (+298)</option>
                    <option value="+679">🇫🇯 Fiji (+679)</option>
                    <option value="+358">🇫🇮 Finland (+358)</option>
                    <option value="+33">🇫🇷 France (+33)</option>
                    <option value="+594">🇬🇫 French Guiana (+594)</option>
                    <option value="+689">🇵🇫 French Polynesia (+689)</option>
                    <option value="+241">🇬🇦 Gabon (+241)</option>
                    <option value="+220">🇬🇲 Gambia (+220)</option>
                    <option value="+995">🇬🇪 Georgia (+995)</option>
                    <option value="+49">🇩🇪 Germany (+49)</option>
                    <option value="+233">🇬🇭 Ghana (+233)</option>
                    <option value="+350">🇬🇮 Gibraltar (+350)</option>
                    <option value="+30">🇬🇷 Greece (+30)</option>
                    <option value="+299">🇬🇱 Greenland (+299)</option>
                    <option value="+1473">🇬🇩 Grenada (+1473)</option>
                    <option value="+590">🇬🇵 Guadeloupe (+590)</option>
                    <option value="+1671">🇬🇺 Guam (+1671)</option>
                    <option value="+502">🇬🇹 Guatemala (+502)</option>
                    <option value="+44">🇬🇬 Guernsey (+44)</option>
                    <option value="+224">🇬🇳 Guinea (+224)</option>
                    <option value="+245">🇬🇼 Guinea-Bissau (+245)</option>
                    <option value="+592">🇬🇾 Guyana (+592)</option>
                    <option value="+509">🇭🇹 Haiti (+509)</option>
                    <option value="+504">🇭🇳 Honduras (+504)</option>
                    <option value="+852">🇭🇰 Hong Kong (+852)</option>
                    <option value="+36">🇭🇺 Hungary (+36)</option>
                    <option value="+354">🇮🇸 Iceland (+354)</option>
                    <option value="+91" selected>🇮🇳 India (+91)</option>
                    <option value="+62">🇮🇩 Indonesia (+62)</option>
                    <option value="+98">🇮🇷 Iran (+98)</option>
                    <option value="+964">🇮🇶 Iraq (+964)</option>
                    <option value="+353">🇮🇪 Ireland (+353)</option>
                    <option value="+44">🇮🇲 Isle of Man (+44)</option>
                    <option value="+972">🇮🇱 Israel (+972)</option>
                    <option value="+39">🇮🇹 Italy (+39)</option>
                    <option value="+1876">🇯🇲 Jamaica (+1876)</option>
                    <option value="+81">🇯🇵 Japan (+81)</option>
                    <option value="+44">🇯🇪 Jersey (+44)</option>
                    <option value="+962">🇯🇴 Jordan (+962)</option>
                    <option value="+7">🇰🇿 Kazakhstan (+7)</option>
                    <option value="+254">🇰🇪 Kenya (+254)</option>
                    <option value="+686">🇰🇮 Kiribati (+686)</option>
                    <option value="+850">🇰🇵 Korea (North) (+850)</option>
                    <option value="+82">🇰🇷 Korea (South) (+82)</option>
                    <option value="+965">🇰🇼 Kuwait (+965)</option>
                    <option value="+996">🇰🇬 Kyrgyzstan (+996)</option>
                    <option value="+856">🇱🇦 Laos (+856)</option>
                    <option value="+371">🇱🇻 Latvia (+371)</option>
                    <option value="+961">🇱🇧 Lebanon (+961)</option>
                    <option value="+266">🇱🇸 Lesotho (+266)</option>
                    <option value="+231">🇱🇷 Liberia (+231)</option>
                    <option value="+218">🇱🇾 Libya (+218)</option>
                    <option value="+423">🇱🇮 Liechtenstein (+423)</option>
                    <option value="+370">🇱🇹 Lithuania (+370)</option>
                    <option value="+352">🇱🇺 Luxembourg (+352)</option>
                    <option value="+853">🇲🇴 Macao (+853)</option>
                    <option value="+389">🇲🇰 Macedonia (+389)</option>
                    <option value="+261">🇲🇬 Madagascar (+261)</option>
                    <option value="+265">🇲🇼 Malawi (+265)</option>
                    <option value="+60">🇲🇾 Malaysia (+60)</option>
                    <option value="+960">🇲🇻 Maldives (+960)</option>
                    <option value="+223">🇲🇱 Mali (+223)</option>
                    <option value="+356">🇲🇹 Malta (+356)</option>
                    <option value="+692">🇲🇭 Marshall Islands (+692)</option>
                    <option value="+596">🇲🇶 Martinique (+596)</option>
                    <option value="+222">🇲🇷 Mauritania (+222)</option>
                    <option value="+230">🇲🇺 Mauritius (+230)</option>
                    <option value="+262">🇾🇹 Mayotte (+262)</option>
                    <option value="+52">🇲🇽 Mexico (+52)</option>
                    <option value="+691">🇫🇲 Micronesia (+691)</option>
                    <option value="+373">🇲🇩 Moldova (+373)</option>
                    <option value="+377">🇲🇨 Monaco (+377)</option>
                    <option value="+976">🇲🇳 Mongolia (+976)</option>
                    <option value="+382">🇲🇪 Montenegro (+382)</option>
                    <option value="+1664">🇲🇸 Montserrat (+1664)</option>
                    <option value="+212">🇲🇦 Morocco (+212)</option>
                    <option value="+258">🇲🇿 Mozambique (+258)</option>
                    <option value="+95">🇲🇲 Myanmar (+95)</option>
                    <option value="+264">🇳🇦 Namibia (+264)</option>
                    <option value="+674">🇳🇷 Nauru (+674)</option>
                    <option value="+977">🇳🇵 Nepal (+977)</option>
                    <option value="+31">🇳🇱 Netherlands (+31)</option>
                    <option value="+687">🇳🇨 New Caledonia (+687)</option>
                    <option value="+64">🇳🇿 New Zealand (+64)</option>
                    <option value="+505">🇳🇮 Nicaragua (+505)</option>
                    <option value="+227">🇳🇪 Niger (+227)</option>
                    <option value="+234">🇳🇬 Nigeria (+234)</option>
                    <option value="+683">🇳🇺 Niue (+683)</option>
                    <option value="+672">🇳🇫 Norfolk Island (+672)</option>
                    <option value="+1670">🇲🇵 Northern Mariana Islands (+1670)</option>
                    <option value="+47">🇳🇴 Norway (+47)</option>
                    <option value="+968">🇴🇲 Oman (+968)</option>
                    <option value="+92">🇵🇰 Pakistan (+92)</option>
                    <option value="+680">🇵🇼 Palau (+680)</option>
                    <option value="+970">🇵🇸 Palestine (+970)</option>
                    <option value="+507">🇵🇦 Panama (+507)</option>
                    <option value="+675">🇵🇬 Papua New Guinea (+675)</option>
                    <option value="+595">🇵🇾 Paraguay (+595)</option>
                    <option value="+51">🇵🇪 Peru (+51)</option>
                    <option value="+63">🇵🇭 Philippines (+63)</option>
                    <option value="+48">🇵🇱 Poland (+48)</option>
                    <option value="+351">🇵🇹 Portugal (+351)</option>
                    <option value="+1787">🇵🇷 Puerto Rico (+1787)</option>
                    <option value="+974">🇶🇦 Qatar (+974)</option>
                    <option value="+262">🇷🇪 Réunion (+262)</option>
                    <option value="+40">🇷🇴 Romania (+40)</option>
                    <option value="+7">🇷🇺 Russia (+7)</option>
                    <option value="+250">🇷🇼 Rwanda (+250)</option>
                    <option value="+590">🇧🇱 Saint Barthélemy (+590)</option>
                    <option value="+290">🇸🇭 Saint Helena (+290)</option>
                    <option value="+1869">🇰🇳 Saint Kitts and Nevis (+1869)</option>
                    <option value="+1758">🇱🇨 Saint Lucia (+1758)</option>
                    <option value="+590">🇲🇫 Saint Martin (+590)</option>
                    <option value="+508">🇵🇲 Saint Pierre and Miquelon (+508)</option>
                    <option value="+1784">🇻🇨 Saint Vincent and the Grenadines (+1784)</option>
                    <option value="+685">🇼🇸 Samoa (+685)</option>
                    <option value="+378">🇸🇲 San Marino (+378)</option>
                    <option value="+239">🇸🇹 São Tomé and Príncipe (+239)</option>
                    <option value="+966">🇸🇦 Saudi Arabia (+966)</option>
                    <option value="+221">🇸🇳 Senegal (+221)</option>
                    <option value="+381">🇷🇸 Serbia (+381)</option>
                    <option value="+248">🇸🇨 Seychelles (+248)</option>
                    <option value="+232">🇸🇱 Sierra Leone (+232)</option>
                    <option value="+65">🇸🇬 Singapore (+65)</option>
                    <option value="+1721">🇸🇽 Sint Maarten (+1721)</option>
                    <option value="+421">🇸🇰 Slovakia (+421)</option>
                    <option value="+386">🇸🇮 Slovenia (+386)</option>
                    <option value="+677">🇸🇧 Solomon Islands (+677)</option>
                    <option value="+252">🇸🇴 Somalia (+252)</option>
                    <option value="+27">🇿🇦 South Africa (+27)</option>
                    <option value="+500">🇬🇸 South Georgia (+500)</option>
                    <option value="+211">🇸🇸 South Sudan (+211)</option>
                    <option value="+34">🇪🇸 Spain (+34)</option>
                    <option value="+94">🇱🇰 Sri Lanka (+94)</option>
                    <option value="+249">🇸🇩 Sudan (+249)</option>
                    <option value="+597">🇸🇷 Suriname (+597)</option>
                    <option value="+47">🇸🇯 Svalbard and Jan Mayen (+47)</option>
                    <option value="+46">🇸🇪 Sweden (+46)</option>
                    <option value="+41">🇨🇭 Switzerland (+41)</option>
                    <option value="+963">🇸🇾 Syria (+963)</option>
                    <option value="+886">🇹🇼 Taiwan (+886)</option>
                    <option value="+992">🇹🇯 Tajikistan (+992)</option>
                    <option value="+255">🇹🇿 Tanzania (+255)</option>
                    <option value="+66">🇹🇭 Thailand (+66)</option>
                    <option value="+670">🇹🇱 Timor-Leste (+670)</option>
                    <option value="+228">🇹🇬 Togo (+228)</option>
                    <option value="+690">🇹🇰 Tokelau (+690)</option>
                    <option value="+676">🇹🇴 Tonga (+676)</option>
                    <option value="+1868">🇹🇹 Trinidad and Tobago (+1868)</option>
                    <option value="+216">🇹🇳 Tunisia (+216)</option>
                    <option value="+90">🇹🇷 Turkey (+90)</option>
                    <option value="+993">🇹🇲 Turkmenistan (+993)</option>
                    <option value="+1649">🇹🇨 Turks and Caicos Islands (+1649)</option>
                    <option value="+688">🇹🇻 Tuvalu (+688)</option>
                    <option value="+256">🇺🇬 Uganda (+256)</option>
                    <option value="+380">🇺🇦 Ukraine (+380)</option>
                    <option value="+971">🇦🇪 United Arab Emirates (+971)</option>
                    <option value="+44">🇬🇧 United Kingdom (+44)</option>
                    <option value="+1">🇺🇸 United States (+1)</option>
                    <option value="+598">🇺🇾 Uruguay (+598)</option>
                    <option value="+998">🇺🇿 Uzbekistan (+998)</option>
                    <option value="+678">🇻🇺 Vanuatu (+678)</option>
                    <option value="+379">🇻🇦 Vatican City (+379)</option>
                    <option value="+58">🇻🇪 Venezuela (+58)</option>
                    <option value="+84">🇻🇳 Vietnam (+84)</option>
                    <option value="+1284">🇻🇬 Virgin Islands (British) (+1284)</option>
                    <option value="+1340">🇻🇮 Virgin Islands (US) (+1340)</option>
                    <option value="+681">🇼🇫 Wallis and Futuna (+681)</option>
                    <option value="+212">🇪🇭 Western Sahara (+212)</option>
                    <option value="+967">🇾🇪 Yemen (+967)</option>
                    <option value="+260">🇿🇲 Zambia (+260)</option>
                    <option value="+263">🇿🇼 Zimbabwe (+263)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    onKeyPress={(e) => {
                      const char = String.fromCharCode(e.which);
                      if (!/[0-9+\-_() ]/.test(char)) {
                        e.preventDefault();
                      }
                    }}
                    onInput={(e) => {
                      const target = e.target as HTMLInputElement;
                      target.value = target.value.replace(/[^0-9+\-_() ]/g, '');
                    }}
                    pattern="[0-9+\-_() ]+"
                    className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                    placeholder="913 567 6155"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Interested In *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                >
                  <option value="">Select a service</option>
                  <option value="agentic-ai-multi-agentic-ai-development">AGENTIC AI / MULTI AGENTIC AI DEVELOPMENT</option>
                  <option value="ai-development">AI Development</option>
                  <option value="big-data-solutions">Big Data Solutions</option>
                  <option value="blockchain">Blockchain</option>
                  <option value="chat-bot">Chat Bot</option>
                  <option value="cloud-computing">Cloud Computing</option>
                  <option value="custom-software">Custom Software</option>
                  <option value="data-analytics">Data Analytics</option>
                  <option value="devops">DevOps</option>
                  <option value="game-development">Game Development</option>
                  <option value="iot-development">IoT Development</option>
                  <option value="machine-learning-solutions">Machine Learning Solutions</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app-development">Mobile App Development</option>
                  <option value="ui-ux-designs">UI/UX Designs</option>
                  <option value="vr-ar-development">VR & AR Development</option>
                  <option value="web-development">Web Development</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-sm sm:text-base"
                  placeholder="Tell us about your project requirements, timeline, and budget..."
                />
              </div>

              <div className="flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={RECAPTCHA_SITE_KEY}
                  onChange={handleRecaptchaChange}
                  theme="light"
                />
              </div>

              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className={`w-full px-6 py-3 sm:py-4 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 font-semibold shadow-lg text-sm sm:text-base ${!isFormValid || isSubmitting ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'text-white hover:shadow-xl cursor-pointer'
                  }`}
                style={isFormValid && !isSubmitting ? { backgroundColor: '#FF3C1A' } : {}}
              >
                <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                {!isSubmitting && <Send className="h-4 w-4 sm:h-5 sm:w-5" />}
                {isSubmitting && (
                  <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white"></div>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;