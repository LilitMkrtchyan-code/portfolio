import type { CareerWorkspaceProps } from './types';
import CareerResponse from '../CareerResponse';
import CvEssentials from '../CvEssentials';
import styles from './styles.module.css';

const CareerWorkspace = ({ aiResponse, isLoading, onSave, onDownload }: CareerWorkspaceProps) => {
  return (
    <div className={styles.careerWorkspace}>
      <CareerResponse
        aiResponse={aiResponse}
        isLoading={isLoading}
        onSave={onSave}
        onDownload={onDownload}
      />
      <CvEssentials />
    </div>
  );
};

export default CareerWorkspace;
