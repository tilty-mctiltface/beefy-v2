import React, { memo, useCallback, useState } from 'react';
import { Collapse, makeStyles } from '@material-ui/core';
import { styles } from './styles';
import { VaultEntity } from '../../../../../data/entities/vault';
import { VaultIdentity } from '../../../../../../components/VaultIdentity';
import { VaultDashboardStats } from '../../../../../../components/VaultStats/VaultDashboardStats';
import { VaultTransactions } from '../VaultTransactions';

const useStyles = makeStyles(styles);

export type VaultProps = {
  vaultId: VaultEntity['id'];
};
export const Vault = memo<VaultProps>(function Vault({ vaultId }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <div>
      <div className={classes.vault}>
        <div onClick={handleOpen} className={classes.vaultInner}>
          <VaultIdentity isLink={true} networkClassName={classes.network} vaultId={vaultId} />
          <VaultDashboardStats vaultId={vaultId} />
        </div>
      </div>
      <Collapse in={open} timeout="auto">
        <div className={classes.collapseInner}>
          <VaultTransactions vaultId={vaultId} />
        </div>
      </Collapse>
    </div>
  );
});
