import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const FenceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M9 4V44" stroke="#F77B34" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16 9L16 37" stroke="#F77B34" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path><path d="M24 9L24 37" stroke="#F77B34" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path><path d="M32 9L32 37" stroke="#F77B34" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path><path d="M42 44L6 44" stroke="#F77B34" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path><path d="M42 37L6 37" stroke="#F77B34" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path><path d="M39 4V44" stroke="#F77B34" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path><path d="M42 9L6 9" stroke="#F77B34" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
);

const RampIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 512 512" fill="none"><g><path fill="#F77B34" d="M163.906,35.844c-4.258-6.518-14.9-6.518-19.156,0l-36.705,56.195c-0.973,1.486-1.482,3.172-1.482,4.889 v56.119v73.871v104.019v73.871v66.459c0,5.4,4.951,9.777,11.058,9.777h73.412c6.109,0,11.06-4.377,11.06-9.777v-66.459v-73.871 V226.918v-73.871V96.928c0-1.717-0.512-3.402-1.482-4.889L163.906,35.844z M151.677,347.072c9.28,0,16.801,7.522,16.801,16.801 c0,9.277-7.521,16.799-16.801,16.799c-9.277,0-16.799-7.522-16.799-16.799C134.878,354.594,142.4,347.072,151.677,347.072z M151.831,198.762c-9.367,0-16.961-7.521-16.961-16.801c0-9.277,7.594-16.8,16.961-16.8s16.961,7.523,16.961,16.8 C168.792,191.24,161.198,198.762,151.831,198.762z"></path><path fill="#F77B34" d="M367.251,35.844c-4.258-6.518-14.898-6.518-19.156,0L311.39,92.039c-0.971,1.486-1.482,3.172-1.482,4.889 v56.119v73.871v104.019v73.871v66.459c0,5.4,4.951,9.777,11.058,9.777h73.414c6.108,0,11.058-4.377,11.058-9.777v-66.459v-73.871 V226.918v-73.871V96.928c0-1.717-0.512-3.402-1.482-4.889L367.251,35.844z M355.88,347.072c9.278,0,16.799,7.522,16.799,16.801 c0,9.277-7.521,16.799-16.799,16.799c-9.279,0-16.801-7.522-16.801-16.799C339.079,354.594,346.6,347.072,355.88,347.072z M355.88,198.762c-9.279,0-16.801-7.521-16.801-16.801c0-9.277,7.522-16.8,16.801-16.8c9.278,0,16.799,7.523,16.799,16.8 C372.678,191.24,365.157,198.762,355.88,198.762z"></path><path fill="#F77B34" d="M75.312,153.047H16.267c-10.444,0-18.178,9.549-15.852,19.568l9.726,57.869 c1.692,7.275,8.268,12.434,15.852,12.434h49.318c5.486,0,9.934-4.377,9.934-9.776v-70.32 C85.246,157.424,80.798,153.047,75.312,153.047z"></path><path fill="#F77B34" d="M287.03,153.047h-62.08c-1.332,0-2.414,1.065-2.414,2.379v85.115c0,1.313,1.082,2.377,2.414,2.377h62.08 c1.334,0,2.416-1.064,2.416-2.377v-85.115C289.446,154.111,288.364,153.047,287.03,153.047z"></path><path fill="#F77B34" d="M436.67,242.918h49.336c7.584,0,14.16-5.158,15.85-12.434l9.728-57.869 c2.326-10.02-5.408-19.568-15.852-19.568H436.67c-5.486,0-9.934,4.377-9.934,9.776v70.32 C426.737,238.541,431.184,242.918,436.67,242.918z"></path><path fill="#F77B34" d="M75.312,306.937H16.267c-10.444,0-18.178,9.549-15.852,19.566l9.726,57.869 c1.692,7.275,8.268,12.436,15.852,12.436h49.318c5.486,0,9.934-4.377,9.934-9.778v-70.318 C85.246,311.314,80.798,306.937,75.312,306.937z"></path><path fill="#F77B34" d="M287.03,306.937h-62.08c-1.332,0-2.414,1.064-2.414,2.377v85.115c0,1.314,1.082,2.379,2.414,2.379h62.08 c1.334,0,2.416-1.065,2.416-2.379v-85.115C289.446,308.001,288.364,306.937,287.03,306.937z"></path><path fill="#F77B34" d="M495.733,306.937H436.67c-5.486,0-9.934,4.377-9.934,9.776v70.318c0,5.4,4.448,9.778,9.934,9.778h49.336 c7.584,0,14.16-5.16,15.85-12.436l9.728-57.869C513.911,316.486,506.176,306.937,495.733,306.937z"></path></g></svg>
);

const FencesAndRailingsSection = () => {
  const { t } = useLanguage();
  
  return (
  <section className="max-w-4xl mx-auto px-4 py-16 text-center">
    <h3 className="text-lg md:text-xl font-semibold mb-6 text-gray-700">{t('fences_railings')}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white rounded shadow p-8 flex flex-col items-center">
        {/* Fence Icon */}
        <div className="mb-4"><FenceIcon /></div>
        <h4 className="font-bold text-lg mb-2">{t('fences')}</h4>
        <p className="text-gray-500 text-sm">{t('fences_desc')}</p>
      </div>
      <div className="bg-white rounded shadow p-8 flex flex-col items-center">
        {/* Ramp Icon */}
        <div className="mb-4"><RampIcon /></div>
        <h4 className="font-bold text-lg mb-2">{t('ramps')}</h4>
        <p className="text-gray-500 text-sm">{t('ramps_desc')}</p>
      </div>
    </div>
  </section>
);
};

export default FencesAndRailingsSection; 