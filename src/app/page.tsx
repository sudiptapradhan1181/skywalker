import FirstFold from '@/components/FirstFold';
import FixedInfo from '@/components/FixedInfo';
import Header from '@/components/Header';
import { SOCIAL_ICONS } from '@/constants';

export default function Home() {
    return (
        <div className="relative font-[family-name:var(--font-fira-code)]">
            <Header />
            <FirstFold />
            <div className="fixed rotate-90 bottom-[135px] left-0">
                <FixedInfo icons={SOCIAL_ICONS} />
            </div>
            <div className="fixed rotate-90 bottom-[135px] right-0">
                <FixedInfo />
            </div>
        </div>
    );
}
